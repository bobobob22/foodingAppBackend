"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createApp_1 = require("./createApp");
async function bootstrap() {
    const app = await createApp_1.createApp();
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map