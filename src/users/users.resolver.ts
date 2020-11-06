import { Resolver, Query } from "@nestjs/graphql";
import { UsersService } from "./users.service";

@Resolver('User')
export class UserResolver{
    constructor(private readonly usersService: UsersService){}

    @Query()
    async users(){
        return this.usersService.findAll();
    }

}