import { User } from 'src/auth/user.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getProducts(user: User): Promise<Product[]>;
    createProduct(createProductDto: CreateProductDto, user: User): Promise<Product>;
}
