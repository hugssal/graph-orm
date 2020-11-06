import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { UsersModule } from './users/users.module';
import { WishlistModule } from './wishlist/wishlist.module';


@Module({
  imports: [DatabaseModule, UsersModule, ProductsModule, SalesModule, WishlistModule]
})
export class AppModule {}
