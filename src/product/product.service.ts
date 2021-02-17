import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) { }

  async getProducts(user: User): Promise<Product[]> {
    return this.productRepository.getProducts(user);
}

  async createProduct(createProductDto: CreateProductDto, user: User): Promise<Product> {
    return this.productRepository.createProduct(createProductDto, user);
  }

}
