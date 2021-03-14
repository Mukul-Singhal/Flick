import express from "express";
import {
  changePassword,
  editProfile,
  userDetails,
  users,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();
userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetails);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
