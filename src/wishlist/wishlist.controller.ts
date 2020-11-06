import { Controller, Get } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { Wishlist } from 'src/entity/wishlist.entity';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
    constructor(private readonly wishlistService: WishlistService){}

    @Get()
    getHello(): Promise<Wishlist[]> {
    return this.wishlistService.findAll();
    }
}