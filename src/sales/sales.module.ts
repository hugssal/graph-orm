import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from 'src/entity/sale.entity';
import { SalesResolver } from './sales.resolver';
import { SalesService } from './sales.service';


@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  providers: [SalesService, SalesResolver ],
  exports: [TypeOrmModule]
})
export class SalesModule {}