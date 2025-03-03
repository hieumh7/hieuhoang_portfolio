import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('gif')
export class GifController {
  @Get()
  @Render('home')
  getGif() {
    return {};
  }
}
