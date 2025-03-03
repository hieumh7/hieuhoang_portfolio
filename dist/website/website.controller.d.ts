import { WebsiteService } from './website.service';
import { Response } from 'express';
export declare class WebsiteController {
    private readonly websiteService;
    constructor(websiteService: WebsiteService);
    getCreateWebsitePage(res: Response): void;
    createWebsite(content: {
        title: string;
        body: string;
        to: string;
        from: string;
        text1: string;
        text2: string;
    }, files: {
        media?: Express.Multer.File[];
        media1?: Express.Multer.File[];
        media2?: Express.Multer.File[];
        media3?: Express.Multer.File[];
        media4?: Express.Multer.File[];
        media5?: Express.Multer.File[];
    }, res: Response): void;
    getCreateWebsitePageForm(res: Response): void;
    getWebsite(id: string, res: Response): void;
}
