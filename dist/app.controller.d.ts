import { Request, Response } from 'express';
export declare class AppController {
    getHome(req: Request): {
        theme: any;
    };
    toggleTheme(req: Request, res: Response): void;
}
