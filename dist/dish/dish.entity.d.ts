import { User } from "src/auth/user.entity";
import { BaseEntity } from "typeorm";
export declare class Dish extends BaseEntity {
    id: number;
    name: string;
    description: string;
    category: string;
    time: number;
    difficulty: number;
    user: User;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
