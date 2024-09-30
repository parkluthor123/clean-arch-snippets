import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';

export class UserRepositoryImpl implements UserRepository {
    private users: User[] = []; // Usando array como DB temporário

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email) || null;
    }
}
