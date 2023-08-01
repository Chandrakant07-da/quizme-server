// db.js
import { MongoClient } from "mongodb";
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const CLUSTERNAME = process.env.CLUSTERNAME;
const DBNAME = process.env.DBNAME;
const url = `mongodb+srv://chandra:test1234@cluster0.qrgzxtx.mongodb.net/`
// const url = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTERNAME}.qrgzxtx.mongodb.net/` // Replace with your MongoDB connection string
const dbName = `${DBNAME}`; // Replace with your database name

const client = new MongoClient(url);

export default async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process on connection failure
  }
}
