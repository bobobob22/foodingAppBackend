
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { DishRepository } from './dish.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([DishRepository]),
    AuthModule,
  ],
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}