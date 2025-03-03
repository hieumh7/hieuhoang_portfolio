import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GifController } from './gifcontroller'; // Đổi tên controller ở đây
import { SodaController } from './sodacontroller';
import { AppService } from './app.service';
import { WebsiteModule } from './website/website.module';
import { TemplateModule2 } from './template2/template2.module';

@Module({
  imports: [WebsiteModule, TemplateModule2],
  controllers: [AppController, GifController, SodaController], // Đảm bảo tên controller ở đây đúng
  providers: [AppService],
})
export class AppModule {}
