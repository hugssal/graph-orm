import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { UserResolver } from './users.resolver';
import { UsersService } from './users.service';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService,UserResolver],
  exports: [TypeOrmModule]
})
export class UsersModule {}