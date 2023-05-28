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
      password: postData.inputPassword,
    });
    /// if not, create a new user
    if (!userExists) {
      return new Response("Пользователя не существует!", { status: 404 });
    }

    return new Response(JSON.stringify("Успешный вход!"), { status: 200 });
  } catch (err) {
    return new Response("Failed to find user", { status: 500 });
  }
};
