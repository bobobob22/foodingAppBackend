import { User } from "src/auth/user.entity";
import { BaseEntity } from "typeorm";
export declare class Product extends BaseEntity {
    id: number;
    name: string;
    description: string;
    image: string;
    quantity: number;
    category: string;
    fat: number;
    carbohydrates: number;
    protein: number;
    weight: number;
    price: string;
    expirationDate: Date;
    user: User;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
