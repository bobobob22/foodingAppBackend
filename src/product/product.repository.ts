import { Product } from './product.entity'
import { EntityRepository, Repository } from "typeorm";
import { CreateProductDto } from './dto/create-product.dto';

import { User } from 'src/auth/user.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

  async getProducts(
    user: User
  ): Promise<Product[]> {

    const query = this.createQueryBuilder('task');

    query.where('task.userId = :userId', { userId: user.id });

    const tasks = await query.getMany();
    return tasks;
  }

  async createProduct(createProductDto: CreateProductDto, user: User): Promise<Product> {
    const { name, description, image, quantity, category, fat, carbohydrates, protein, weight, price, expirationDate, } = createProductDto;

    const product = new Product();
    product.name = name;
    product.description = description;
    product.user = user;
    product.image = image;
    product.quantity = quantity;
    product.category = category;
    product.fat = fat;
    product.carbohydrates = carbohydrates;
    product.protein = protein;
    product.weight = weight;
    product.price = price;
    product.expirationDate = expirationDate;

    await product.save()

    delete product.user;

    return product;
  }
}




