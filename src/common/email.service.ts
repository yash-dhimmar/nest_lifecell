// email/email.service.ts
import { Injectable } from "@nestjs/common";
import { createTransport, Transporter } from "nodemailer";
import { readFileSync } from "fs";
import * as handlebars from "handlebars";
import * as path from "path";
import { error } from "console";

@Injectable()
export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
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

  async sendMail(toMail: string, data: any) {
    try {
      const templatePath = path.join(__dirname, "../", "views", "sendotp.hbs");
      const fileContents = readFileSync(templatePath, "utf-8");

      const subject = "Add User";
      const message = this.prepareMessage(fileContents, data);

      const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: toMail,
        subject: subject,
        html: message,
      };
      await this.transporter.sendMail(mailOptions).then(res => { console.log("res=====", res) }).catch(error => {
        console.log("error=====", error)
      });
    } catch (error) {
      console.log("sendMail catch error ->> ", error);
      throw error;
    }
  }

  private prepareMessage(template: string, data): string {
    const compiledTemplate = handlebars.compile(template);
    return compiledTemplate(data);
  }
}
