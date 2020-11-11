import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from 'src/entity/entry.entity';
import { Product } from 'src/entity/product.entity';
import { Sale } from 'src/entity/sale.entity';
import { InventoryResolver } from './inventory.resolver';
import { InventoryService } from './inventory.service';


@Module({
  imports: [TypeOrmModule.forFeature([Sale,Entry,Product])],
  providers: [InventoryService,InventoryResolver],
  exports: [TypeOrmModule]
})
export class InventoryModule {}