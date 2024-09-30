import { Request, Response } from 'express';
import { CreateUser } from '../../../use_cases/CreateUser';
import { UserRepositoryImpl } from '../../database/UserRepositoryImpl';
import express from 'express'

export class UserController {
    private createUser: CreateUser;

    constructor() {
        const userRepository = new UserRepositoryImpl();
        this.createUser = new CreateUser(userRepository);
    }

    public async create(req: express.Request,res: express.Response): Promise<express.Response> {
        const { name, email, password } = req.body;

        try {
            await this.createUser.execute(name, email, password);
            return res.status(201).send({ message: 'Usuário criado com sucesso.' });
        } catch (error: any) {
            return res.status(400).send({ message: error.message });
        }
    }
}
