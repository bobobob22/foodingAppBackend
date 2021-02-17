import { Product } from './product.entity';
import { Repository } from "typeorm";
import { CreateProductDto } from './dto/create-product.dto';
import { User } from 'src/auth/user.entity';
export declare class ProductRepository extends Repository<Product> {
    getProducts(user: User): Promise<Product[]>;
    createProduct(createProductDto: CreateProductDto, user: User): Promise<Product>;
}
