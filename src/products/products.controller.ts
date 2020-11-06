import { Controller, Get } from '@nestjs/common';
import { Product } from 'src/entity/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    getHello(): Promise<Product[]> {
    return this.productsService.findAll();
    }
}