"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const port = 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*'
    });
    await app.listen(port);
    common_1.Logger.log('KFL app running on localhost:${port}', 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map