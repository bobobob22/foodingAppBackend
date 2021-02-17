import { IsNotEmpty, IsString, IsNumber, IsDate, IsDateString, IsOptional } from 'class-validator'

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsNumber()
  quantity: number

  @IsNotEmpty()
  category: string;

  @IsNumber()
  fat: number;

  @IsNumber()
  carbohydrates: number;

  @IsNumber()
  protein: number;

  @IsNotEmpty()
  weight: number;

  @IsString()
  price: string;

  @IsDateString()
  expirationDate: Date;
}

