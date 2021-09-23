"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserDto = void 0;
const user_dto_1 = require("../user/dto/user.dto");
const user_entity_1 = require("../user/entity/user.entity");
const toUserDto = (data) => {
    const { id, name, password } = data;
    let todoDto = { id, name, password, };
    return todoDto;
};
exports.toUserDto = toUserDto;
//# sourceMappingURL=mapper.js.map