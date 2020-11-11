import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { rejects } from "assert";
import { resolve } from "path";
import { Entry } from "src/entity/entry.entity";
import { Product } from "src/entity/product.entity";
import { Sale } from "src/entity/sale.entity";
import { Result } from "src/graphql";
import { ProductsResolver } from "src/products/products.resolver";
import { createQueryBuilder, Repository } from "typeorm";


@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
    @InjectRepository(Entry)
    private entrysRepository: Repository<Entry>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

     async getInventory(): Promise<Result[]>{
        let inventory: Result[] = []; 
        const products = await createQueryBuilder(Product).leftJoin("idProduct","aliaS")
        console.log(products)
        
        return null
    }

}