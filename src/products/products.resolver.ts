import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Product } from "src/entity/product.entity";
import { ProductDto } from "./dto/products.dto";
import { ProductsService } from "./products.service";

@Resolver('Product')
export class ProductsResolver{
    constructor(private readonly productsService: ProductsService){}

    @Query()
    async products(){
        return this.productsService.findAll();
    }
    @Query()
    async product(@Args('id') id: number) {
    return this.productsService.findOneById(id);
    }

    @Mutation('createProduct')
    async create(@Args('input') args: ProductDto): Promise<Product>{
        return this.productsService.create(args);
    }

    @Mutation('deleteProduct')
    async delete (@Args('id') id: number): Promise<Product>{
        return this.productsService.delete(id);
    }

    @Mutation('updateProduct')
    async update (@Args('input') args): Promise<Product>{
        return this.productsService.update(args);
    }

}