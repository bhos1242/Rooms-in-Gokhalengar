import mongoose from "mongoose";

const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, { dbName: "rooms-in-gokhalenagar" });

    if(connection){

        console.log("Mongo connection successful");
       
    }
    else{
        console.log("connection failed")
    }
  } catch (error) {
    console.log("Connection failed",error)
  }
};

export default connect;