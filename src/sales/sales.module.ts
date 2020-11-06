import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from 'src/entity/sale.entity';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';


@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  providers: [SalesService],
  controllers: [SalesController],
  exports: [TypeOrmModule]
})
export class SalesModule {}