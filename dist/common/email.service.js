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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
const fs_1 = require("fs");
const handlebars = require("handlebars");
const path = require("path");
let EmailService = exports.EmailService = class EmailService {
    constructor() {
        this.transporter = (0, nodemailer_1.createTransport)({
            secure: true,
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
    }
    async sendMail(toMail, data) {
        try {
            const templatePath = path.join(__dirname, "../", "views", "sendotp.hbs");
            const fileContents = (0, fs_1.readFileSync)(templatePath, "utf-8");
            const subject = "Add User";
            const message = this.prepareMessage(fileContents, data);
            const mailOptions = {
                from: process.env.SMTP_EMAIL,
                to: toMail,
                subject: subject,
                html: message,
            };
            await this.transporter.sendMail(mailOptions).then(res => { console.log("res=====", res); }).catch(error => {
                console.log("error=====", error);
            });
        }
        catch (error) {
            console.log("sendMail catch error ->> ", error);
            throw error;
        }
    }
    prepareMessage(template, data) {
        const compiledTemplate = handlebars.compile(template);
        return compiledTemplate(data);
    }
};
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
//# sourceMappingURL=email.service.js.map