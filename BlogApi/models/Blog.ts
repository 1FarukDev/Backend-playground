import mongoose, { Document, Schema } from 'mongoose';

// Define the blog document interface for TypeScript
interface IBlog extends Document {
    title: string;
    content: string;
    excerpt: string;
    image: string;        // Image URL or path
    authorId: mongoose.Types.ObjectId;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    authorName: string
}

const BlogSchema: Schema<IBlog> = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a blog title'],
            maxlength: 200,
        },
        content: {
            type: String,
            required: [true, 'Please provide blog content'],
        },
        excerpt: {
            type: String,     // Excerpt is a short summary of the content
            maxlength: 500,    // Limit the excerpt to 500 characters
        },
        image: {
            type: String,      // Store the URL or path of the image
            required: false,   // The image is optional
        },
        authorId: {
            type: Schema.Types.ObjectId,
            ref: 'User',       // Reference to the User model for the author
            required: [true, 'Please provide an author'],
        },
        tags: {
            type: [String],    // Array of strings for tags
            default: [],       // Default value is an empty array
        },
        authorName: {
            type: String,    // Array of strings for tags
            required: false       // Default value is an empty array
        },
    },
    { timestamps: true }       // Automatically adds createdAt and updatedAt fields
);

export default mongoose.model<IBlog>('Blog', BlogSchema);
