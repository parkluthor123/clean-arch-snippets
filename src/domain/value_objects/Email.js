"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(email) {
        this.email = email;
    }
    static create(email) {
        if (!this.isValidEmail(email)) {
            throw new Error('Email inválido.');
        }
        return new Email(email);
    }
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    toString() {
        return this.email;
    }
}
exports.Email = Email;
