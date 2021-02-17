"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../auth/user.entity");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const dish_service_1 = require("./dish.service");
const create_dish_dto_1 = require("./dto/create-dish.dto");
let DishController = class DishController {
    constructor(dishService) {
        this.dishService = dishService;
    }
    getProducts(user) {
        return this.dishService.getDishes(user);
    }
    createTask(createDishDto, user) {
        return this.dishService.createDish(createDishDto, user);
    }
};
__decorate([
    swagger_1.ApiUnauthorizedResponse({ description: 'Not auth' }),
    swagger_1.ApiBearerAuth(),
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./dish.entity").Dish] }),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "getProducts", null);
__decorate([
    swagger_1.ApiUnauthorizedResponse({ description: 'Not auth' }),
    swagger_1.ApiBearerAuth(),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201, type: require("./dish.entity").Dish }),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dish_dto_1.CreateDishDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "createTask", null);
DishController = __decorate([
    common_1.Controller('dish'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], DishController);
exports.DishController = DishController;
//# sourceMappingURL=dish.controller.js.map