import { UserRepository } from '../domain/repositories/UserRepository';
import { User } from '../domain/entities/User';
import { Email } from '../domain/value_objects/Email';

export class CreateUser {
    constructor(private userRepository: UserRepository) {}

    public async execute(name: string, email: string, password: string): Promise<void> {
        const userEmail = Email.create(email);

        // Verifica se já existe um usuário com o email
        const existingUser = await this.userRepository.findByEmail(userEmail.toString());
        if (existingUser) {
            throw new Error('Usuário com este email já existe.');
        }

        const newUser = new User(
            Date.now().toString(), // Gerando ID temporário
            name,
            userEmail.toString(),
            password
        );

        await this.userRepository.save(newUser);
    }
}
