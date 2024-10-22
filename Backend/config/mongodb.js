import mongoose from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
        console.log('DB connected');

        mongoose.connection.on('error', (err) => {
            console.error('DB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('DB disconnected');
        });

    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1);
    }
};

export default connectdb;