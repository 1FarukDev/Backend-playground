import mongoose from 'mongoose';

const connectDB = async (url: string): Promise<void> => {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        throw error; // Rethrow the error for handling by the calling function
    }
};

export default connectDB;
