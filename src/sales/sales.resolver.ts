import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Sale } from 'src/entity/sale.entity';
import { SaleDto } from './dto/sales.dto';
import { SalesService } from './sales.service';

@Resolver('sales')
export class SalesResolver {
    constructor(private readonly salesService: SalesService){}

    @Query()
    async sales() {
    return this.salesService.findAll();
    }

    @Query()
    async sale (@Args('id') id: number) {
    return this.salesService.findOneById(id);
    }

    @Mutation('createSale')
    async createSale(@Args('input') args: SaleDto): Promise<Sale>{
        return this.salesService.create(args);
    }

    @Mutation('updateSale')
    async updateSale (@Args('input') args): Promise<Sale>{
        return this.salesService.update(args);
    }
}