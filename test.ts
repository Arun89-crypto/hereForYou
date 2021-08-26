import express from "express";
import { IntegerType } from "mongodb";
import database from "./sub/database";

let preDate = await (await database())
  .collection("users")
  .findOne({ email: "" }, { projection: { curDate: 1 } });
