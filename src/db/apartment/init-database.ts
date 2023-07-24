import mongoose from 'mongoose';

const initDatabase = async (): Promise<void> => {
  const dbUri: string = 'mongodb://127.0.0.1:27017/krisha';

  try {
    await mongoose.connect(dbUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export { initDatabase };
