import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { typeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { DishService } from './dish/dish.service';
import { DishController } from './dish/dish.controller';
import { DishModule } from './dish/dish.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ScheduleModule.forRoot(),
    TasksModule,
    AuthModule,
    ProductModule,
    DishModule
  ],
})
export class AppModule { }
