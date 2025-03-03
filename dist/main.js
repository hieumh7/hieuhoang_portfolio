"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path = require("path");
const cookieParser = require("cookie-parser");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.useStaticAssets(path.join(__dirname, '..', 'svelte-frontend', 'public'), {
        prefix: '/svelte-frontend',
    });
    app.setViewEngine('ejs');
    app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
    app.useStaticAssets(path.join(__dirname, '..', 'public'));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), {
        prefix: '/uploads',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map