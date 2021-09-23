import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { users } from 'src/mock/users.mock'
import { UserDto } from './dto/user.dto';
import { BaseExceptionFilter } from '@nestjs/core';
import { toPromise } from 'src/shared/utils';
import { toUserDto } from 'src/shared/mapper';
import { CreateUserDto } from './dto/createUser.dto';
import { MailService } from 'src/mail/mail.service';
import { EmailDto } from './dto/email.dto';

@Injectable()
export class UserService {
    constructor(private mailService: MailService){}

    users: UserEntity[] = users;

    getNextId(): number{
        var nextId = 0;
        for(let i = 0; i < users.length; i++){
            if(users[i].id > nextId){
                nextId = users[i].id;
            }
        }
        nextId++;
        return nextId;
    }

    async getAllUsers(): Promise<UserDto[]> {
        return users;
    }

    async getOneUser(id: number): Promise<UserDto> {
        console.log(id);
        if(id > 0){
            console.log("yes");
        }
        const user = this.users.find(user => user.id == id );
        console.log(user);
        if(!user){
            throw new HttpException('das ist not ein gut user id',HttpStatus.BAD_REQUEST);
        }

        return toPromise(toUserDto(user));
    }

    async createUser(userDto: CreateUserDto): Promise<UserDto>{

        const {name, password} = userDto;
        
        const user: UserEntity = {
            id: this.getNextId(),
            name,
            password,
        };

        this.users.push(user);
        return toPromise(toUserDto(user));
    }

    async updateUser(userDto: UserDto): Promise<UserDto>{

        const user: UserEntity = userDto;
        console.log(user);

        var index = this.users.findIndex( user => user.id === userDto.id);
        if(!index && index != 0){
            throw new HttpException('das ist not ein real person',HttpStatus.BAD_REQUEST);
        }
        this.users[index] = user;
        return toPromise(toUserDto(this.users[index]));
    }

    async checkForUser(userDto: CreateUserDto): Promise<UserDto>{

        const {name, password} = userDto;
        const user = this.users.find(user => user.name == name );
        console.log(user);
        if(!user || user.password != password){
            throw new HttpException('das ist not ein gut user',HttpStatus.BAD_REQUEST);
        }
        return toPromise(toUserDto(user));

    }

    async sendEmail(text: string): Promise<EmailDto>{
        await this.mailService.sendUserConfirmation(text);
        return toPromise({text: "email succesful"})
    }


}
