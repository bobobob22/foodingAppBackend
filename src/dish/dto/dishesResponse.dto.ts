import {
  IsArray,
} from 'class-validator';

import { CreateDishDto } from './create-dish.dto';

export class DishesResponseDto {
  @IsArray()
  rooms: Array<CreateDishDto>;
}