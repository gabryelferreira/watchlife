import { Controller, Post, Req, UseGuards, Body, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePersonDTO } from 'src/models/dto/create-person.dto';
import { Person } from './person.entity';
import { User } from 'src/users/user.entity';
import { IPersonWithStar } from 'src/models/person-with-star.model';
import { calculateStars } from 'src/utils/calculate-stars';
import { PersonHistory } from './person-history.entity';
import { CreatePersonHistoryDTO } from 'src/models/dto/create-person-history.dto';

@Controller('persons')
export class PersonsController {
    constructor(private personsService: PersonsService) {}
    
    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Req() request: Request, @Body() body: CreatePersonDTO) {
        const user = request.user as User;
        const person = new Person();
        person.user = user;
        person.name = body.name;
        person.description = body.description;
        const createdPerson = await this.personsService.create(person);
        const completeCreatedPerson = await this.personsService.findById(user.id, createdPerson.id);
        delete completeCreatedPerson.user;
        return completeCreatedPerson;
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll(@Req() request: Request) {
        const user = request.user as User;
        const persons = await this.personsService.findAll(user.id);
        const personsWithStars: IPersonWithStar[] = persons.map<IPersonWithStar>(person => ({
            ...person,
            stars: calculateStars(person.histories)
        }));
        return personsWithStars;
    }

    @Get(":id")
    @UseGuards(JwtAuthGuard)
    async findById(@Param('id') personId, @Req() request: Request) {
        const user = request.user as User;
        const person = await this.personsService.findById(user.id, personId);
        if (!person) {
            throw new HttpException("Person not found", HttpStatus.NOT_FOUND);
        }
        const personWithStars: IPersonWithStar = {
            ...person,
            stars: calculateStars(person.histories)
        };
        return personWithStars;
    }

    @Post(":id/histories")
    @UseGuards(JwtAuthGuard)
    async createHistory(@Param('id') personId, @Req() request: Request, @Body() body: CreatePersonHistoryDTO) {
        const user = request.user as User;
        const isPersonFromUser = !!(await this.personsService.findById(user.id, personId));
        if (!isPersonFromUser) {
            throw new HttpException("Person wasn't created by this user", HttpStatus.UNAUTHORIZED);
        }
        const personHistory = new PersonHistory();
        personHistory.person = new Person();
        personHistory.person.id = personId;
        personHistory.title = body.title;
        personHistory.description = body.description;
        personHistory.stars = body.stars;
        const createdPersonHistory = await this.personsService.createHistory(personHistory);
        return createdPersonHistory;
    }

}
