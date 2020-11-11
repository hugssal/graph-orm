import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from 'src/entity/sale.entity';
import { Repository } from 'typeorm';
import { SaleDto } from './dto/sales.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
  ) {}

  findAll(): Promise<Sale[]> {
      return this.salesRepository.find();
  }

  async findOneById(id: number): Promise<Sale> {
    return await this.salesRepository.findOne(id);
  }

  async create(data: SaleDto): Promise<Sale>{
      let sale : SaleDto =  this.salesRepository.create();
      sale = data;
      return await this.salesRepository.save(sale);
  }

  async update(args):Promise<Sale>{
    let oldSale : Sale = await this.salesRepository.findOne(args.id);
    console.log(oldSale);
    await this.salesRepository.update(
      args.id,
      {
        idSeller : args.idSeller != null ? args.idSeller : oldSale.idSeller,
      });
   return await this.salesRepository.findOne(args.id);
 }

}