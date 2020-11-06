import { Resolver, Query } from '@nestjs/graphql';
import { SalesService } from './sales.service';

@Resolver('sales')
export class SalesResolver {
    constructor(private readonly salesService: SalesService){}

    @Query()
    async sales() {
    return this.salesService.findAll();
    }
}