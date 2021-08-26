import { Request, Response, Router } from "express";
import database from "./database";
import { signUp, signIn, addInfo } from "./service";

const userSignUp = async (req: Request, res: Response) => {
  try {
    await signUp(
      req.body.fName,
      req.body.lName,
      req.body.email,
      req.body.password,
      req.body.cPassword
    );
    res.json({ success: true, message: "User added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "fail to add the user" });
  }
};

const userSignIn = async (req: Request, res: Response) => {
  try {
    const checklogin = await signIn(req.body.email, req.body.password);
    //res.send("login sucessful");
    if (checklogin != null) {
      res.json({ success: true, message: "login succesfully" });
      res.json(checklogin);
    } else {
      res.json({ sucess: false, message: "login unsucessful" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "server issue" });
  }
};

const userAddInfo = async (req: Request, res: Response) => {
  try {
    await addInfo(
      req.body.email,
      req.body.name,
      req.body.phno,
      req.body.age,
      req.body.langPre,
      req.body.gdPre,
      req.body.medHistroy
    );
    res.json({
      success: true,
      message: "thank you for your support, your data has been added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "error" });
  }
};

export const userRoute = () => {
  const app = Router();
  app.post("/signup", userSignUp);
  app.post("/signin", userSignIn);
  app.put("/info", userAddInfo);
  return app;
};
