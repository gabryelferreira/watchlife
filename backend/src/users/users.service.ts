import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../models/dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) { }

    findByUsername(username: string): Promise<User> {
        return this.usersRepository.findOne({
            where: {
                username
            }
        });
    }

    create(user: CreateUserDTO): Promise<User> {
        const entity = Object.assign(new User(), user);
        return this.usersRepository.save(entity);
    }
}
