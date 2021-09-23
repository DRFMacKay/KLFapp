import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { getMaxListeners } from 'process';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(emailText: string) {

    await this.mailerService.sendMail({
      to: "drfmackay@gmail.com",
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Thanks for the feedback! KLF App',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: "Duncan",
        emailText,
      },
    });
  }
}
