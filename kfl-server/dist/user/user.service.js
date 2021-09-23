"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const users_mock_1 = require("../mock/users.mock");
const utils_1 = require("../shared/utils");
const mapper_1 = require("../shared/mapper");
const mail_service_1 = require("../mail/mail.service");
let UserService = class UserService {
    constructor(mailService) {
        this.mailService = mailService;
        this.users = users_mock_1.users;
    }
    getNextId() {
        var nextId = 0;
        for (let i = 0; i < users_mock_1.users.length; i++) {
            if (users_mock_1.users[i].id > nextId) {
                nextId = users_mock_1.users[i].id;
            }
        }
        nextId++;
        return nextId;
    }
    async getAllUsers() {
        return users_mock_1.users;
    }
    async getOneUser(id) {
        console.log(id);
        if (id > 0) {
            console.log("yes");
        }
        const user = this.users.find(user => user.id == id);
        console.log(user);
        if (!user) {
            throw new common_1.HttpException('das ist not ein gut user id', common_1.HttpStatus.BAD_REQUEST);
        }
        return (0, utils_1.toPromise)((0, mapper_1.toUserDto)(user));
    }
    async createUser(userDto) {
        const { name, password } = userDto;
        const user = {
            id: this.getNextId(),
            name,
            password,
        };
        this.users.push(user);
        return (0, utils_1.toPromise)((0, mapper_1.toUserDto)(user));
    }
    async updateUser(userDto) {
        const user = userDto;
        console.log(user);
        var index = this.users.findIndex(user => user.id === userDto.id);
        if (!index && index != 0) {
            throw new common_1.HttpException('das ist not ein real person', common_1.HttpStatus.BAD_REQUEST);
        }
        this.users[index] = user;
        return (0, utils_1.toPromise)((0, mapper_1.toUserDto)(this.users[index]));
    }
    async checkForUser(userDto) {
        const { name, password } = userDto;
        const user = this.users.find(user => user.name == name);
        console.log(user);
        if (!user || user.password != password) {
            throw new common_1.HttpException('das ist not ein gut user', common_1.HttpStatus.BAD_REQUEST);
        }
        return (0, utils_1.toPromise)((0, mapper_1.toUserDto)(user));
    }
    async sendEmail(text) {
        await this.mailService.sendUserConfirmation(text);
        return (0, utils_1.toPromise)({ text: "email succesful" });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mail_service_1.MailService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map