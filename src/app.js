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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("./infrastructure/web/controllers/UserController");
const app = (0, express_1.default)();
// Configuração de middlewares
app.use(express_1.default.json());
// Rotas
const userController = new UserController_1.UserController();
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userController.create(req, res);
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Exporta a aplicação configurada
exports.default = app;
