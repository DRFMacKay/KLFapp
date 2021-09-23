import { UserDto } from "src/user/dto/user.dto";
import { UserEntity } from "src/user/entity/user.entity";

export const toUserDto = (data: UserEntity): UserDto => {  
    const { id, name, password } = data;

    let todoDto: UserDto = { id, name, password, };
    return todoDto;
    
};
