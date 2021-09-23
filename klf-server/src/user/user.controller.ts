import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { toPromise } from 'src/shared/utils';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { EmailDto } from './dto/email.dto';

@Controller('api/users')
export class UserController {  
  
    constructor(private readonly userService: UserService) {}
    @Get()   
    async findAll(): Promise<UserDto[]> {    
    
        const users = await this.userService.getAllUsers();        

            return  users; 
    }

    @Get("/:id")  
    async findOne(@Param("id") id: number): Promise<UserDto> {   
        return await this.userService.getOneUser(id);  
    }

    @Post("/login")    
    async checkForUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {    
        return await this.userService.checkForUser(createUserDto);  
    }
    
    @Post()    
    async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {    
        return await this.userService.createUser(createUserDto);  
    }

    @Post("/contact")
    async sendEmail(@Body() emailDto: EmailDto): Promise<EmailDto> {
        return await this.userService.sendEmail(emailDto.text);
    }



    @Put("/:id") 
    async update(    
        @Param("id") id: string,
        @Body() userDto: UserDto  
    ): Promise<UserDto> { 
    return await this.userService.updateUser(userDto);  
    }

}

