import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [MailModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
