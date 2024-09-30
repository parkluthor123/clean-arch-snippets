"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    // Método para alterar o nome do usuário
    changeName(newName) {
        if (newName.length < 3) {
            throw new Error('Nome deve ter ao menos 3 caracteres.');
        }
        this.name = newName;
    }
    // Método para verificar a senha (pode ser aprimorado com criptografia)
    checkPassword(password) {
        return this.password === password;
    }
}
exports.User = User;
