"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishRepository = void 0;
const dish_entity_1 = require("./dish.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../auth/user.entity");
let DishRepository = class DishRepository extends typeorm_1.Repository {
    async getDishes(user) {
        const query = this.createQueryBuilder('task');
        query.where('task.userId = :userId', { userId: user.id });
        const tasks = await query.getMany();
        return tasks;
    }
    async createDish(createDishDto, user) {
        const { name, description, category, time, difficulty } = createDishDto;
        const dish = new dish_entity_1.Dish();
        dish.name = name;
        dish.description = description;
        dish.user = user;
        dish.category = category;
        dish.time = time;
        dish.difficulty = difficulty;
        await dish.save();
        delete dish.user;
        return dish;
    }
};
DishRepository = __decorate([
    typeorm_1.EntityRepository(dish_entity_1.Dish)
], DishRepository);
exports.DishRepository = DishRepository;
//# sourceMappingURL=dish.repository.js.map