"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_entity_1 = require("./product.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../auth/user.entity");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async getProducts(user) {
        const query = this.createQueryBuilder('task');
        query.where('task.userId = :userId', { userId: user.id });
        const tasks = await query.getMany();
        return tasks;
    }
    async createProduct(createProductDto, user) {
        const { name, description, image, quantity, category, fat, carbohydrates, protein, weight, price, expirationDate, } = createProductDto;
        const product = new product_entity_1.Product();
        product.name = name;
        product.description = description;
        product.user = user;
        product.image = image;
        product.quantity = quantity;
        product.category = category;
        product.fat = fat;
        product.carbohydrates = carbohydrates;
        product.protein = protein;
        product.weight = weight;
        product.price = price;
        product.expirationDate = expirationDate;
        await product.save();
        delete product.user;
        return product;
    }
};
ProductRepository = __decorate([
    typeorm_1.EntityRepository(product_entity_1.Product)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map