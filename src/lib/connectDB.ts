import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    if (mongoose.connections && mongoose.connections[0].readyState) return;
    const { connection } = await mongoose.connect(
      process.env.MONGODB as string,
      {
        dbName: "nextAuth",
      }
    );
    console.log(`Connected to DB: ${connection.host}`);
  } catch {
    throw new Error("Error connecting to database");
  }
};
