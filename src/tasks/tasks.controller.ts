import { Body, Controller, Get, Post, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';


@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @ApiUnauthorizedResponse({ description: 'Not auth' })
    @ApiBearerAuth()
    @Get()
    getTasks(
        @Query(ValidationPipe) filterDto: GetTasksFilterDto,
        @GetUser() user: User,
        ): Promise<Task[]> {
        return this.tasksService.getTasks(filterDto, user);
    }

    @ApiUnauthorizedResponse({ description: 'Not auth' })
    @ApiBearerAuth()
    @Get('/:id')
    getTaskById(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User,
        ): Promise<Task> {
        return this.tasksService.getTaskById(id, user);
    }


    @ApiUnauthorizedResponse({ description: 'Not auth' })
    @ApiBearerAuth()
    @Get('/task/:title')
    getTaskByTitle(
        @Param('title') title: string,
        @GetUser() user: User,
        ): Promise<Task> {
        return this.tasksService.getTaskByTitle(title, user);
    }

    @ApiUnauthorizedResponse({ description: 'Not auth' })
    @ApiBearerAuth()
    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: User,
        ): Promise<Task> {
        return this.tasksService.createTask(createTaskDto, user);
    }

    @ApiUnauthorizedResponse({ description: 'Not auth' })
    @ApiBearerAuth()
    @Delete('/:id')
    deleteTask(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User,
        ): Promise<void> {
        return this.tasksService.deleteTask(id, user);
    }

    @ApiUnauthorizedResponse({ description: 'Not auth' })
    @ApiBearerAuth()
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
        @GetUser() user: User,
    ): Promise<Task> {
        return this.tasksService.updateTaskStatus(id, status, user); 
    }

}
