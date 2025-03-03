import { Injectable } from '@nestjs/common';
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TemplateService2 {
  private websites = {};

  createWebsite(content: {
    title: string;
    body: string;
    to: string;
    from: string;
    text1: string;
    text2: string;
    mediaPath?: string;
    mediaPath1?: string;
    mediaPath2?: string;
    mediaPath3?: string;
    mediaPath4?: string;
    mediaPath5?: string;
  }) {
    const id = Date.now().toString();
    const templatePath = path.resolve(process.cwd(), 'views/template2.ejs');

    if (!fs.existsSync(templatePath)) {
      throw new Error('Template file not found');
    }

    const template = fs.readFileSync(templatePath, 'utf-8');

    // Render template với dữ liệu mới
    const customizedPage = ejs.render(template, {
      title: content.title,
      body: content.body,
      to: content.to,
      from: content.from,
      text1: content.text1,
      text2: content.text2,
      mediaPath: content.mediaPath || '',
      mediaPath1: content.mediaPath1 || '',
      mediaPath2: content.mediaPath2 || '',
      mediaPath3: content.mediaPath3 || '',
      mediaPath4: content.mediaPath4 || '',
      mediaPath5: content.mediaPath5 || '',
    });

    this.websites[id] = customizedPage;
    return { id, message: 'Website created successfully!' };
  }

  getWebsite(id: string) {
    return this.websites[id]
      ? { content: this.websites[id] }
      : { error: 'Website not found' };
  }
}
