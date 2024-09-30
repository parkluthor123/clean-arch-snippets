export class User {
    constructor(
        public readonly id: string,
        public name: string,
        public email: string,
        public password: string,
    ) {}

    // Método para alterar o nome do usuário
    changeName(newName: string) {
        if (newName.length < 3) {
            throw new Error('Nome deve ter ao menos 3 caracteres.');
        }
        this.name = newName;
    }

    // Método para verificar a senha (pode ser aprimorado com criptografia)
    checkPassword(password: string): boolean {
        return this.password === password;
    }
}
