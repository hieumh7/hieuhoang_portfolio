"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModule2 = void 0;
const common_1 = require("@nestjs/common");
const template2_controller_1 = require("./template2.controller");
const template2_service_1 = require("./template2.service");
let TemplateModule2 = class TemplateModule2 {
};
exports.TemplateModule2 = TemplateModule2;
exports.TemplateModule2 = TemplateModule2 = __decorate([
    (0, common_1.Module)({
        controllers: [template2_controller_1.TemplateController2],
        providers: [template2_service_1.TemplateService2],
    })
], TemplateModule2);
//# sourceMappingURL=template2.module.js.map