import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Product } from 'src/entity/product.entity';
import { Sale } from 'src/entity/sale.entity';
import { User } from 'src/entity/user.entity';
import { Wishlist } from 'src/entity/wishlist.entity';
import { Connection } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "master",
            database: "api_graphql",
            entities: [User,Wishlist, Product, Sale],
            synchronize: true
        })
    ]
})
export class DatabaseModule {
    constructor(private connection: Connection) {}
}