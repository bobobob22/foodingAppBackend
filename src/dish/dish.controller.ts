import { Body, Controller, Get, Post, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

import { Dish } from './dish.entity'

import { DishService } from './dish.service'
import { CreateDishDto } from './dto/create-dish.dto'


@Controller('dish')
@UseGuards(AuthGuard())
export class DishController {

  constructor(private dishService: DishService) {}

  @ApiUnauthorizedResponse({ description: 'Not auth' })
  @ApiBearerAuth()
  @Get()
  getProducts(
      @GetUser() user: User,
      ): Promise<Dish[]> {
      return this.dishService.getDishes(user);
  }

  @ApiUnauthorizedResponse({ description: 'Not auth' })
  @ApiBearerAuth()
  @Post()
  @UsePipes(ValidationPipe)
  createTask(
      @Body() createDishDto: CreateDishDto,
      @GetUser() user: User,
      ): Promise<Dish> {
      return this.dishService.createDish(createDishDto, user);
  }
  
}
