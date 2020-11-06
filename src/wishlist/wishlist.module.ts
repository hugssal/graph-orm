import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from 'src/entity/wishlist.entity';
import { WishlistResolver } from './wishlist.resolver';
import { WishlistService } from './wishlist.service';


@Module({
  imports: [TypeOrmModule.forFeature([Wishlist])],
  providers: [WishlistService, WishlistResolver],
  exports: [TypeOrmModule]
})
export class WishlistModule {}