import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { EmailDto } from './dto/email.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<UserDto[]>;
    findOne(id: number): Promise<UserDto>;
    checkForUser(createUserDto: CreateUserDto): Promise<UserDto>;
    create(createUserDto: CreateUserDto): Promise<UserDto>;
    sendEmail(emailDto: EmailDto): Promise<EmailDto>;
    update(id: string, userDto: UserDto): Promise<UserDto>;
}
