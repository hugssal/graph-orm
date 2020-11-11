import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({ active: true });
  }

    async findOneById(id: number): Promise<Product> {
      return await this.productRepository.findOne(id);
  }

  async create(data: ProductDto): Promise<Product>{
    let product : ProductDto =  this.productRepository.create();
    product = data;
    return await this.productRepository.save(product);
  }

  async delete(id: number):Promise<Product>{
    await this.productRepository.update(id, {active:false});
   return await this.productRepository.findOne(id);
 }

 async update(args):Promise<Product>{
  console.log(args);
  let oldProduct : Product = await this.productRepository.findOne(args.id);
  await this.productRepository.update(
    args.id,
    {
     name : args.name != null ? args.name : oldProduct.name,
     price : args.price != null ? args.price : oldProduct.price,
    });
 return await this.productRepository.findOne(args.id);
  }

}