"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteService = void 0;
const common_1 = require("@nestjs/common");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
let WebsiteService = class WebsiteService {
    constructor() {
        this.websites = {};
    }
    createWebsite(content) {
        const id = Date.now().toString();
        const templatePath = path.resolve(process.cwd(), 'views/template1.ejs');
        if (!fs.existsSync(templatePath)) {
            throw new Error('Template file not found');
        }
        const template = fs.readFileSync(templatePath, 'utf-8');
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
    getWebsite(id) {
        return this.websites[id]
            ? { content: this.websites[id] }
            : { error: 'Website not found' };
    }
};
exports.WebsiteService = WebsiteService;
exports.WebsiteService = WebsiteService = __decorate([
    (0, common_1.Injectable)()
], WebsiteService);
//# sourceMappingURL=website.service.js.map