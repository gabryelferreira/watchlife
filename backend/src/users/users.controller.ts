import { Controller, Post, Body, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { LoginDTO } from '../models/dto/login.dto';
import { CreateUserDTO } from '../models/dto/create-user.dto';
import bcryptHelper from '../utils/bcrypt-helper';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService,
    ) { }

    @Post()
    async create(@Body() user: CreateUserDTO) {
        const usernameAlreadyTaken = !!(await this.usersService.findByUsername(user.username));
        if (usernameAlreadyTaken) {
            throw new HttpException("Username already taken", HttpStatus.CONFLICT);
        }
        const createdUser = await this.usersService.create(user);
        const access_token = this.authService.getAccessToken(createdUser);
        delete createdUser.password;
        return {
            user: createdUser,
            access_token
        }
    }

    @Post('/auth')
    @HttpCode(200)
    async login(@Body() login: LoginDTO) {
        const user = await this.usersService.findByUsername(login.username);
        if (!user) {
            throw new HttpException("Invalid username or password", HttpStatus.BAD_REQUEST);
        }
        const correctPassword = await bcryptHelper.compare(login.password, user.password);
        if (!correctPassword) {
            throw new HttpException("Invalid username or password", HttpStatus.BAD_REQUEST);
        }
        const access_token = this.authService.getAccessToken(user);
        delete user.password;
        return {
            user: user,
            access_token,
        }
    }

}
