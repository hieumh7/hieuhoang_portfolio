"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateController2 = void 0;
const common_1 = require("@nestjs/common");
const template2_service_1 = require("./template2.service");
const multer_1 = require("multer");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
let TemplateController2 = class TemplateController2 {
    constructor(websiteService) {
        this.websiteService = websiteService;
    }
    createWebsite(content, files, res) {
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
        res.redirect(`/template/${result.id}`);
    }
    getCreateWebsitePageForm(res) {
        res.render('template2-form');
    }
    getWebsite(id, res) {
        const website = this.websiteService.getWebsite(id);
        if (website.error) {
            res.status(404).send('Website not found');
        }
        else {
            res.send(website.content);
        }
    }
};
exports.TemplateController2 = TemplateController2;
__decorate([
    (0, common_1.Post)('create2'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'media', maxCount: 1 },
        { name: 'media1', maxCount: 1 },
        { name: 'media2', maxCount: 1 },
        { name: 'media3', maxCount: 1 },
        { name: 'media4', maxCount: 1 },
        { name: 'media5', maxCount: 1 },
    ], {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, uniqueSuffix + (0, path_1.extname)(file.originalname));
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], TemplateController2.prototype, "createWebsite", null);
__decorate([
    (0, common_1.Get)('create2'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TemplateController2.prototype, "getCreateWebsitePageForm", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TemplateController2.prototype, "getWebsite", null);
exports.TemplateController2 = TemplateController2 = __decorate([
    (0, common_1.Controller)('template'),
    __metadata("design:paramtypes", [template2_service_1.TemplateService2])
], TemplateController2);
//# sourceMappingURL=template2.controller.js.map