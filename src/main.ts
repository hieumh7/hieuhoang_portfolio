import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser()); // Sử dụng cookie-parser
  app.useStaticAssets(path.join(__dirname, '..', 'svelte-frontend', 'public'), {
    prefix: '/svelte-frontend', // Thêm prefix để xác định đường dẫn
  });
  // Cấu hình EJS làm view engine
  app.setViewEngine('ejs');

  // Đặt thư mục chứa các view (EJS templates)
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));

  // Đặt thư mục static (cho các file như CSS, JS)
  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  // Cho phép phục vụ file tĩnh từ thư mục "uploads"
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });

  await app.listen(3000);
}
bootstrap();
