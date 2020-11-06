import { Resolver, Query } from '@nestjs/graphql';
import { Wishlist } from 'src/entity/wishlist.entity';
import { WishlistService } from './wishlist.service';

@Resolver('wishlist')
export class WishlistResolver {
    constructor(private readonly wishlistService: WishlistService){}

    @Query()
    wishlists(){
    return this.wishlistService.findAll();
    }
}