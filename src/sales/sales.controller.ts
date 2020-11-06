import { Controller, Get } from '@nestjs/common';
import { Sale } from 'src/entity/sale.entity';
import { SalesService } from './sales.service';


@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SalesService){}

    @Get()
    getHello(): Promise<Sale[]> {
    return this.salesService.findAll();
    }
}