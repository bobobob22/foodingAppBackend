import { User } from 'src/auth/user.entity';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getTasks(user: User): Promise<Product[]>;
    createTask(createProductDto: CreateProductDto, user: User): Promise<Product>;
}
