export class Email {
    private constructor(private readonly email: string) {}

    public static create(email: string): Email {
        if (!this.isValidEmail(email)) {
            throw new Error('Email inválido.');
        }
        return new Email(email);
    }

    public static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    public toString(): string {
        return this.email;
    }
}
