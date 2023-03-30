import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUserDto} from './dto/create-user-dto';
import {Post, Body, Get} from '@nestjs/common'

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
        
    }

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }
}
