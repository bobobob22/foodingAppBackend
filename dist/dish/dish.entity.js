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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../auth/user.entity");
const typeorm_1 = require("typeorm");
let Dish = class Dish extends typeorm_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, category: { required: true, type: () => String }, time: { required: true, type: () => Number }, difficulty: { required: true, type: () => Number }, user: { required: true, type: () => require("../auth/user.entity").User }, userId: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Dish.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Dish.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Dish.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Dish.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Dish.prototype, "time", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Dish.prototype, "difficulty", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.tasks, { eager: false }),
    __metadata("design:type", user_entity_1.User)
], Dish.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Dish.prototype, "userId", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Dish.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Dish.prototype, "updatedAt", void 0);
Dish = __decorate([
    typeorm_1.Entity()
], Dish);
exports.Dish = Dish;
//# sourceMappingURL=dish.entity.js.map