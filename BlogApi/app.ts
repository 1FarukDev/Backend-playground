import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import connectDB from './db/connect';

// Import routers
import blogsRouter from './routes/blog';
import authRouter from './routes/auth';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

// Use routers
app.use('/api/v1/blog', blogsRouter);
app.use('/api/v1/auth', authRouter);

// Define the port
const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        // Connect to the database
        await connectDB(mongoURI);
        console.log('Database connected');

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

// Start the server
startServer();
