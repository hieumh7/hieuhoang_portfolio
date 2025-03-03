import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('soda')
export class SodaController {
  @Get()
  @Render('soda')
  getGif() {
    return {};
  }
}
