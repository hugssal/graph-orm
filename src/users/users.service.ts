import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { User } from 'src/entity/user.entity'
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find({ active: true });
    }

    async findOneById(id: number): Promise<User> {
        return await this.usersRepository.findOne(id);
    }

    async create(data: UserDto): Promise<User>{
        let user : UserDto =  this.usersRepository.create();
        user = data;
        return await this.usersRepository.save(user);
    }
    
    async delete(id: number):Promise<User>{
       await this.usersRepository.update(id, {active:false});
      return await this.usersRepository.findOne(id);
    }

    async update(args):Promise<User>{
      let oldUser : User = await this.usersRepository.findOne(args.id);
      await this.usersRepository.update(
        args.id,
        {
         name : args.name != null ? args.name : oldUser.name,
         firstName : args.firstName != null ? args.firstName : oldUser.firstName,
         lastName : args.lastName != null ? args.lastName : oldUser.lastName,
         rolId : args.rolId != null ? args.rolId : oldUser.rolId 
        });
     return await this.usersRepository.findOne(args.id);
   }

}