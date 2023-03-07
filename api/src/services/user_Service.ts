import { User } from "../models/user";

export const userExist = async (searchObject: object) => {
  const user = await User.findOne(searchObject);
  return !!user;
};


export const logInUser = async (obj: Object) => {
  const u = await User.findOne(obj)
  return u;
}

export const userExists = async (searchObject: object) => {
  const user = await User.findOne(searchObject);
  console.log('p', searchObject)

  return user;
};

export const create = async (createObject: object) => {
  const user = new User(createObject);
  await user.save();
  return user;
};

export const getUsers = async () => {
  const users = await User.find();
  if (!users.length) {
    console.log("no users found in db");
  }
  return users;
};