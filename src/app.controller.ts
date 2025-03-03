import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHome(@Req() req: Request) {
    console.log('Cookies:', req.cookies); // Kiểm tra cookies trong console
    const theme = req.cookies?.theme || 'light'; // Kiểm tra tránh lỗi undefined
    return { theme };
  }

  @Get('toggle-theme')
  toggleTheme(@Req() req: Request, @Res() res: Response) {
    const currentTheme = req.cookies?.theme === 'dark' ? 'light' : 'dark';
    res.cookie('theme', currentTheme, { path: '/' }); // Lưu theme vào cookie
    res.redirect('/'); // Reload trang để cập nhật theme
  }
}
