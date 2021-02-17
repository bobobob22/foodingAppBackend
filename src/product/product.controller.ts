import { Body, Controller, Get, Post, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

import { Product } from './product.entity'

import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'



@Controller('product')
@UseGuards(AuthGuard())
export class ProductController {

  constructor(private productService: ProductService) {}

  @ApiUnauthorizedResponse({ description: 'Not auth' })
  @ApiBearerAuth()
  @Get()
  getTasks(
      @GetUser() user: User,
      ): Promise<Product[]> {
      return this.productService.getProducts(user);
  }

  @ApiUnauthorizedResponse({ description: 'Not auth' })
  @ApiBearerAuth()
  @Post()
  @UsePipes(ValidationPipe)
  createTask(
      @Body() createProductDto: CreateProductDto,
      @GetUser() user: User,
      ): Promise<Product> {
      return this.productService.createProduct(createProductDto, user);
  }
  
}
