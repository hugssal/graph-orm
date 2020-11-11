import { Catch } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Wishlist } from 'src/entity/wishlist.entity';
import { WishlistDto } from './dto/wishlist.dto';
import { WishlistService } from './wishlist.service';

@Resolver('wishlist')
export class WishlistResolver {
    constructor(private readonly wishlistService: WishlistService){}

    @Query()
    async wishlist(@Args('id') id: number) {
    return this.wishlistService.findByClient(id);
    }

    @Mutation('createWishlist')
    async create(@Args('input') args: WishlistDto): Promise<Wishlist>{
        return this.wishlistService.create(args);
    }

    @Mutation('deleteWishlist')
    async delete (@Args('id') id: number): Promise<string>{
        return this.wishlistService.delete(id);
    } 

}