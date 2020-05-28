import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { Repository } from 'typeorm';
import { PersonHistory } from './person-history.entity';

@Injectable()
export class PersonsService {

    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
        @InjectRepository(PersonHistory)
        private readonly personHistoryRepository: Repository<PersonHistory>,
    ) { }

    create(person: Person): Promise<Person> {
        const entity = Object.assign(new Person(), person);
        return this.personRepository.save(entity);
    }

    findAll(userId: number): Promise<Person[]> {
        return this.personRepository.find({
            where: {
                user: {
                    id: userId
                }
            },
            relations: ["histories"]
        })
    }

    findById(userId: number, personId: number): Promise<Person | undefined> {
        return this.personRepository.findOne({
            where: {
                id: personId,
                user: {
                    id: userId
                }
            },
            relations: ["histories"]
        })
    }

    createHistory(history: PersonHistory): Promise<PersonHistory> {
        const entity = Object.assign(new PersonHistory(), history);
        return this.personHistoryRepository.save(entity);
    }

}
