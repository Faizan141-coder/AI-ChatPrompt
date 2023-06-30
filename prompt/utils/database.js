import mongoose from 'mongoose';

let isConnected  // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "faizan",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
}