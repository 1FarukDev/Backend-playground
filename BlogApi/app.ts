import express, { Request, Response } from 'express';

const blogsRouter = require('./routes/blog')

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.use('/api/v1/blog', blogsRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
