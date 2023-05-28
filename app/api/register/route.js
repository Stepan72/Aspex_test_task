import { connectToDB } from "@/utils/database";
import User from "@/models/user";
// import bcrypt from "bcrypt";

export const POST = async (req, { params }) => {
  try {
    const postData = await req.json();
    // console.log(postData);
    await connectToDB();
    // / check if user already exists
    const userExists = await User.findOne({
      login: postData.inputName,
    });
    /// if not, create a new user
    if (!userExists) {
      await User.create({
        login: postData.inputName,
        password: postData.inputPassword,
      });
    }

    return new Response(
      JSON.stringify("Пользователь создан или уже существует"),
      { status: 200 }
    );
  } catch (err) {
    return new Response("Failed to create user", { status: 500 });
  }
};
