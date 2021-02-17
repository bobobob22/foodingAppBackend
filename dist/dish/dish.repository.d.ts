import { Dish } from './dish.entity';
import { Repository } from "typeorm";
import { User } from 'src/auth/user.entity';
import { CreateDishDto } from './dto/create-dish.dto';
export declare class DishRepository extends Repository<Dish> {
    getDishes(user: User): Promise<Dish[]>;
    createDish(createDishDto: CreateDishDto, user: User): Promise<Dish>;
}
