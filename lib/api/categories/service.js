import { ObjectId } from 'mongodb';
import { getDbCollection } from '../database';

const getCollection = async () => {
  const collection = await getDbCollection({ name: 'categories' });
  return collection;
};

const getCategories = async () => {
  const collection = await getCollection();
  const brands = await collection.find();
  return brands.toArray();
};

const getCategoryById = async (_id) => {
  const collection = await getCollection();
  const brand = await collection.findOne({ _id: ObjectId(_id) });
  return brand;
};

const createCategory = async ({ name }) => {
  const collection = await getCollection();
  const result = await collection.insertOne({ name });
  const brand = result.ops[0];
  return brand;
};

const updateCategory = async ({ _id, name }) => {
  const collection = await getCollection();
  const result = await collection.findOneAndUpdate(
    { _id: ObjectId(_id) },
    { $set: { name } },
    { returnOriginal: false },
  );
  const brand = result.value;
  return brand;
};

const removeCategory = async ({ _id }) => {
  const collection = await getCollection();
  const result = await collection.findOneAndDelete({ _id: ObjectId(_id) });
  const brand = result.value;
  return brand;
};

export { getCategories, getCategoryById, createCategory, updateCategory, removeCategory };
