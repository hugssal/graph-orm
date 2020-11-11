import { IsNotEmpty } from "class-validator";

export class SaleDto{

    @IsNotEmpty()
    idProduct: number;

    @IsNotEmpty()
    quantity: number; 
    
    @IsNotEmpty()
    idClient: number;
    
    @IsNotEmpty()
    idSeller: number;
}