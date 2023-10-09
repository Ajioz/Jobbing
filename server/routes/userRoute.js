const Express = require("express")
const {
  getUsersAsync,
  addUser,
  getUsersSync,
  updateUser,
  deleteUser,
} = require("../controller/userController.js");


const userRouter = Express.Router();

// reading the data
userRouter.get("/users", getUsersAsync);


// Read - get all users from the json file
userRouter.get("/users/list", getUsersSync);


// create user
userRouter.post("/user/adduser", addUser);


// Update - using Put method
userRouter.put("/user/:id", updateUser);


//delete - using delete method
userRouter.delete("/user/:id", deleteUser);


module.exports = userRouter;