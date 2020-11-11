import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { User } from "src/entity/user.entity";
import { UserDto } from "./dto/users.dto";
import { UsersService } from "./users.service";

@Resolver('User')
export class UserResolver{
    constructor(private readonly usersService: UsersService){}

    @Query('users')
    async users(){
        return this.usersService.findAll();
    }

    @Query('user') 
    async user(@Args('id') id: number) {
        return this.usersService.findOneById(id);
    }

    @Mutation('createUser')
    async create(@Args('input') args: UserDto): Promise<User>{
        return this.usersService.create(args);
    }

    @Mutation('deleteUser')
    async delete (@Args('id') id: number): Promise<User>{
        return this.usersService.delete(id);
    }

    @Mutation('updateUser')
    async update (@Args('input') args): Promise<User>{
        return this.usersService.update(args);
    }
}