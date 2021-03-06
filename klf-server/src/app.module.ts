import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [UserModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
