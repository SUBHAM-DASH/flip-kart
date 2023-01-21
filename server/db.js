import mongoose from "mongoose";

export const connectToMongoose = async (USERNAME, PASSWORD) => {
  try {
    const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.keubw3s.mongodb.net/FLIP-KART-APP?retryWrites=true&w=majority`;

    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewurlParser: true,
    });
    console.log("connect with mongo successfully!");
  } catch (error) {
    console.log("error while connecting with database!", error.message);
  }
};
export default connectToMongoose;
