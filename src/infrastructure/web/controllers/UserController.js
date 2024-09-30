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
exports.UserController = void 0;
const CreateUser_1 = require("../../../use_cases/CreateUser");
const UserRepositoryImpl_1 = require("../../database/UserRepositoryImpl");
class UserController {
    constructor() {
        const userRepository = new UserRepositoryImpl_1.UserRepositoryImpl();
        this.createUser = new CreateUser_1.CreateUser(userRepository);
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            try {
                yield this.createUser.execute(name, email, password);
                return res.status(201).send({ message: 'Usuário criado com sucesso.' });
            }
            catch (error) {
                return res.status(400).send({ message: error.message });
            }
        });
    }
}
exports.UserController = UserController;
