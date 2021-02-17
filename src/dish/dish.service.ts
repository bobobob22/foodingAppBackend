import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateDishDto } from './dto/create-dish.dto';
import { Dish } from './dish.entity';
import { DishRepository } from './dish.repository';


@Injectable()
export class DishService {
  constructor(
    @InjectRepository(DishRepository)
    private dishRepository: DishRepository,
  ) { }

  async getDishes(user: User): Promise<Dish[]> {
    return this.dishRepository.getDishes(user);
}

  async createDish(createDishDto: CreateDishDto, user: User): Promise<Dish> {
    return this.dishRepository.createDish(createDishDto, user);
  }

}
