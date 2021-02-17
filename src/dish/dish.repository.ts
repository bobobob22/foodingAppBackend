import { Dish } from './dish.entity'
import { EntityRepository, Repository } from "typeorm";

import { User } from 'src/auth/user.entity';
import { CreateDishDto } from './dto/create-dish.dto';

@EntityRepository(Dish)
export class DishRepository extends Repository<Dish> {

  async getDishes(
    user: User
  ): Promise<Dish[]> {

    const query = this.createQueryBuilder('task');

    query.where('task.userId = :userId', { userId: user.id });

    const tasks = await query.getMany();
    return tasks;
  }

  async createDish(createDishDto: CreateDishDto, user: User): Promise<Dish> {
    const { name, description, category, time, difficulty } = createDishDto;

    const dish = new Dish();
    dish.name = name;
    dish.description = description;
    dish.user = user;
    dish.category = category;
    dish.time = time;
    dish.difficulty = difficulty;

    await dish.save()

    delete dish.user;
    return dish;
  }
}




