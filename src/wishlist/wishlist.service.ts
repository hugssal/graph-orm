import { Catch, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wishlist } from 'src/entity/wishlist.entity';
import { Repository } from 'typeorm';
import { WishlistDto } from './dto/wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,
  ) {}

  async findByClient(id: number): Promise<Wishlist[]> {
      return await this.wishlistRepository.find({idCliente:id});
  }

  async create(data: WishlistDto): Promise<Wishlist>{
      let wishlist : WishlistDto =  this.wishlistRepository.create();
      wishlist = data;
      return await this.wishlistRepository.save(wishlist);
  }
  
  async delete(id: number):Promise<string>{
    await this.wishlistRepository.delete({idWish :id});
    return "Objeto borrado con exito";
  }

}