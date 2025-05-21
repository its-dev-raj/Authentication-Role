import UserModel from "../models/user.js";

export const Getuser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const checkAdmin = await UserModel.findById(userId);

    if (checkAdmin.role == "admin") {
      return res
        .status(404)
        .json({ success: false, message: "you can not delete youself" });
    } 

    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "user deleted successfully", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
    console.log(error);
  }
};
