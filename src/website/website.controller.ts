import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Res,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { WebsiteService } from './website.service';
import { Response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { Multer } from 'multer';

@Controller('website')
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}

  @Get('create')
  getCreateWebsitePage(@Res() res: Response) {
    res.render('create-website');
  }

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'media', maxCount: 1 },
        { name: 'media1', maxCount: 1 },
        { name: 'media2', maxCount: 1 },
        { name: 'media3', maxCount: 1 },
        { name: 'media4', maxCount: 1 },
        { name: 'media5', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, cb) => {
            const uniqueSuffix =
              Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + extname(file.originalname));
          },
        }),
      },
    ),
  )
  createWebsite(
    @Body()
    content: {
      title: string;
      body: string;
      to: string;
      from: string;
      text1: string;
      text2: string;
    },
    @UploadedFiles()
    files: {
      media?: Express.Multer.File[];
      media1?: Express.Multer.File[];
      media2?: Express.Multer.File[];
      media3?: Express.Multer.File[];
      media4?: Express.Multer.File[];
      media5?: Express.Multer.File[];
    },
    @Res() res: Response,
  ) {
    const mediaPath = files.media?.[0]?.filename
      ? `/uploads/${files.media[0].filename}`
      : '';
    const mediaPath1 = files.media1?.[0]?.filename
      ? `/uploads/${files.media1[0].filename}`
      : '';
    const mediaPath2 = files.media2?.[0]?.filename
      ? `/uploads/${files.media2[0].filename}`
      : '';
    const mediaPath3 = files.media3?.[0]?.filename
      ? `/uploads/${files.media3[0].filename}`
      : '';
    const mediaPath4 = files.media4?.[0]?.filename
      ? `/uploads/${files.media4[0].filename}`
      : '';
    const mediaPath5 = files.media5?.[0]?.filename
      ? `/uploads/${files.media5[0].filename}`
      : '';

    const result = this.websiteService.createWebsite({
      ...content,
      mediaPath,
      mediaPath1,
      mediaPath2,
      mediaPath3,
      mediaPath4,
      mediaPath5,
    });

    res.redirect(`/website/${result.id}`);
  }
  @Get('template-form1')
  getCreateWebsitePageForm(@Res() res: Response) {
    res.render('template1-form');
  }

  @Get(':id')
  getWebsite(@Param('id') id: string, @Res() res: Response) {
    const website = this.websiteService.getWebsite(id);
    if (website.error) {
      res.status(404).send('Website not found');
    } else {
      res.send(website.content);
    }
  }
}
