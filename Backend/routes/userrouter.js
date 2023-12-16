const express = require("express");
const usermodel = require("../model/user");
const routers = express.Router();


routers.post("/users",  async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const data = new usermodel({ name, email, password });
    const result = await data.save();
    if (!result) {
      res.send({
        status: false,
        message: "Give proper information",
      });
    } else {
      res.send({
        status: true,
        message: "Register Successfully",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "error message yaetho thappu panita" });
  }
});

routers.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email, password });
    if (!user) {
      res.send({
        status: false,
        message: "Invalid email or password",
      });
    } else {
      res.send({
        status: true,
        message: "Login Successful",
        data: user,
      });
    }
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Error occurred during login" });
  }
});


routers.get("/users", async (req, res) => {
  try {
    const result = await usermodel.find();
    if (!result) {
      res.send({
        status: false,
        message: "Give proper information",
      });
    } else {
      res.send({
        status: true,
        message: "Data's found Successfully",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "error message yaetho thappu panita" });
  }
});

routers.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await usermodel.findById(_id);
    if (!result) {
      res.json({
        status: false,
        message: "User not  found",
      });
    } else {
      res.json({
        status: true,
        message: "User Found Successfully",
        data: result,
      });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = routers;
