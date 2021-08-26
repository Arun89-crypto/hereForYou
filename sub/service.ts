import { IntegerType } from "mongodb";
import database from "./database";
//import argon from "argon2";
let dtFormat = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export const signUp = async (
  fName: string,
  lName: string,
  email: string,
  password: string,
  cPassword: string
) => {
  let date = new Date();
  try {
    return await (await database()).collection("users").insertOne({
      fName: fName,
      lName: lName,
      email: email,
      password: password,
      cPassword: cPassword,
      curDate: dtFormat.format(date),
      preDate: dtFormat.format(date),
      emoji: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      name: null,
      phno: null,
      age: null,
      langPre: null,
      gdPre: null,
      medHistroy: null,
    });
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const preDate = await (await database())
      .collection("users")
      .findOne({ email: email }, { projection: { _id: 0, curDate: 1 } });
    let date = new Date();
    return (
      await (await database()).collection("users").findOne({
        $and: [{ email: email, password: password }],
      }),
      await (await database())
        .collection("users")
        .updateOne(
          { email: email },
          { $set: { curDate: dtFormat.format(date), preDate: preDate } }
        )
    );
  } catch (Error) {
    console.log(Error);
    throw Error("failed to find");
  }
};

export const addInfo = async (
  email: string,
  name: string,
  phno: string,
  age: string,
  langPre: string,
  gdPre: string,
  medHistroy: string
) => {
  try {
    return await (await database()).collection("users").updateMany(
      { email: email },
      {
        $set: {
          name: name,
          phno: phno,
          age: age,
          langPre: langPre,
          gdPre: gdPre,
          medHistroy: medHistroy,
        },
      }
    );
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};

export const emojiData = async (email: string, emoji: Array<IntegerType>) => {
  try {
    return await (await database()).collection("users").updateMany(
      { email: email },
      {
        $set: {
          emoji: emoji,
        },
      }
    );
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};
