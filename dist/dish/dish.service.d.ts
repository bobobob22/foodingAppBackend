import { User } from 'src/auth/user.entity';
import { CreateDishDto } from './dto/create-dish.dto';
import { Dish } from './dish.entity';
import { DishRepository } from './dish.repository';
export declare class DishService {
    private dishRepository;
    constructor(dishRepository: DishRepository);
    getDishes(user: User): Promise<Dish[]>;
    createDish(createDishDto: CreateDishDto, user: User): Promise<Dish>;
}
