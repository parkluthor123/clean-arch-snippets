"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const User_1 = require("../domain/entities/User");
const Email_1 = require("../domain/value_objects/Email");
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userEmail = Email_1.Email.create(email);
            // Verifica se já existe um usuário com o email
            const existingUser = yield this.userRepository.findByEmail(userEmail.toString());
            if (existingUser) {
                throw new Error('Usuário com este email já existe.');
            }
            const newUser = new User_1.User(Date.now().toString(), // Gerando ID temporário
            name, userEmail.toString(), password);
            yield this.userRepository.save(newUser);
        });
    }
}
exports.CreateUser = CreateUser;
