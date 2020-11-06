import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [TypeOrmModule]
})
export class UsersModule {}