import express from 'express';
import { UserController } from './infrastructure/web/controllers/UserController'

const app = express();

// Configuração de middlewares
app.use(express.json());

// Rotas
const userController = new UserController();

app.post('/users', async (req: express.Request, res: express.Response): Promise<void> => {
    await userController.create(req, res);
});

app.get('/', (req: express.Request, res: express.Response): void => {
    res.send('Hello World!');
})

// Exporta a aplicação configurada
export default app;