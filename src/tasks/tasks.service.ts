
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cron } from '@nestjs/schedule';

import { User } from 'src/auth/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { Expo } from 'expo-server-sdk';


@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) { }


    // @Cron('10 * * * * 1')
    // handleCron() {
    //     this.logger.debug('Called when the current second is 45');

    //     const expo = new Expo();
    //     const messages = []
    //     const somePushTokens = ['ExponentPushToken[wemOMTGy7Jg2W3ezALAwFm]'];

    //     for (let pushToken of somePushTokens) {
    //         // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]

    //         // Check that all your push tokens appear to be valid Expo push tokens
    //         if (!Expo.isExpoPushToken(pushToken)) {
    //             console.error(`Push token ${pushToken} is not a valid Expo push token`);
    //             continue;
    //         }

    //         // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
    //         messages.push({
    //             to: pushToken,
    //             sound: 'default',
    //             body: 'This is a test notification',
    //             data: { withSome: 'data' },
    //         })
    //     }

    //     let chunks = expo.chunkPushNotifications(messages);
    //     let tickets = [];
    //     (async () => {
    //         // Send the chunks to the Expo push notification service. There are
    //         // different strategies you could use. A simple one is to send one chunk at a
    //         // time, which nicely spreads the load out over time:
    //         for (let chunk of chunks) {
    //             try {
    //                 let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
    //                 console.log(ticketChunk);
    //                 tickets.push(...ticketChunk);
    //                 // NOTE: If a ticket contains an error code in ticket.details.error, you
    //                 // must handle it appropriately. The error codes are listed in the Expo
    //                 // documentation:
    //                 // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         }
    //     })();
    // }

    async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
        return this.taskRepository.getTasks(filterDto, user);
    }

    async getTaskById(id: number, user: User): Promise<Task> {
        const found = await this.taskRepository.findOne({ where: { id, userId: user.id } });

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    async getTaskByTitle(title: string, user: User): Promise<Task> {
        const found = await this.taskRepository.findOneOrFail({ where: { title: title } });
        console.log('get task by title', found)
        if (!found) {
            throw new NotFoundException(`Task with ID "${title}" not found`);
        }
        return found;
    }

    async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto, user);
    }

    async deleteTask(id: number, user: User): Promise<void> {
        const result = await this.taskRepository.delete({ id, userId: user.id });

        if (!result.affected) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }

    async updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task> {
        const task = await this.getTaskById(id, user);
        task.status = status;
        await task.save();
        return task;
    }
}
