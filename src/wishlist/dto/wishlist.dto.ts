import { IsNotEmpty } from "class-validator";

export class WishlistDto {

    @IsNotEmpty()
    idProduct: number;
    
    @IsNotEmpty()
    idCliente: number;
}