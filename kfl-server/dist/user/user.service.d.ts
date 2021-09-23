import { UserEntity } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { MailService } from 'src/mail/mail.service';
import { EmailDto } from './dto/email.dto';
export declare class UserService {
    private mailService;
    constructor(mailService: MailService);
    users: UserEntity[];
    getNextId(): number;
    getAllUsers(): Promise<UserDto[]>;
    getOneUser(id: number): Promise<UserDto>;
    createUser(userDto: CreateUserDto): Promise<UserDto>;
    updateUser(userDto: UserDto): Promise<UserDto>;
    checkForUser(userDto: CreateUserDto): Promise<UserDto>;
    sendEmail(text: string): Promise<EmailDto>;
}
