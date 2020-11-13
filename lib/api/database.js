import url from 'url';
import { MongoClient } from 'mongodb';

// @see https://vercel.com/guides/deploying-a-mongodb-powered-api-with-node-and-vercel

// Create cached connection variable
let cachedDb = null;

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
const connectToDatabase = async ({ uri }) => {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    console.log('🍃  Using existing connection');
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const options = { useNewUrlParser: true, useUnifiedTopology: true };
  const client = await MongoClient.connect(uri, options);
  console.log('📚  Connected to MongoDB');

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1));

  // Cache the database connection and return the connection
  cachedDb = db;
  return db;
};

const getDbCollection = async ({ name }) => {
  // Get database connection
  const db = await connectToDatabase({ uri: process.env.MONGODB_URI });

  // Get database collection
  const collection = await db.collection(name);
  return collection;
};

export { connectToDatabase, getDbCollection };
