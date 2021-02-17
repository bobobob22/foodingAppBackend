import { User } from 'src/auth/user.entity';
import { Dish } from './dish.entity';
import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
export declare class DishController {
    private dishService;
    constructor(dishService: DishService);
    getProducts(user: User): Promise<Dish[]>;
    createTask(createDishDto: CreateDishDto, user: User): Promise<Dish>;
}
