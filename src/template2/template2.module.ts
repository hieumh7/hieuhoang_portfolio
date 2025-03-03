// src/website/website.module.ts
import { Module } from '@nestjs/common';
import { TemplateController2 } from './template2.controller';
import { TemplateService2 } from './template2.service';

@Module({
  controllers: [TemplateController2],
  providers: [TemplateService2],
})
export class TemplateModule2 {}
