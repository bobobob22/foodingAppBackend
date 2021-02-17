import { IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreateDishDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  category: string;

  @IsNumber()
  time: number;

  @IsNotEmpty()
  difficulty: number;
}

