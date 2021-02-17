"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const createApp = async (nestOptions) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, nestOptions);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('TTFM')
        .setDescription('Turntable Rooms Service')
        .addBearerAuth({ in: 'header', type: 'http' })
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    return app.useGlobalPipes(new common_1.ValidationPipe());
};
exports.createApp = createApp;
//# sourceMappingURL=createApp.js.map