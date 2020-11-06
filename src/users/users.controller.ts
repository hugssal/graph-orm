import { Controller, Get } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userServices: UsersService){}

    @Get()
    getHello(): Promise<User[]> {
    return this.userServices.findAll();
    }
}