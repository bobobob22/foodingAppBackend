import {
  IsArray,
} from 'class-validator';

import { CreateProductDto } from './create-product.dto';

export class ProductsResponseDto {
  @IsArray()
  rooms: Array<CreateProductDto>;
}