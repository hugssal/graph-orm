import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { UsersModule } from './users/users.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    DatabaseModule, 
    UsersModule, 
    ProductsModule, 
    SalesModule, 
    WishlistModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql']
    })
  ]
})
export class AppModule {}
