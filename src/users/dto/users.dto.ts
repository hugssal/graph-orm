import { IsNotEmpty } from 'class-validator';


export class UserDto{

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    rolId: number;

}