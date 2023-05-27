export const GET = async (req, { params }) => {
  try {
    // console.log(params);
    const data = [
      { tableFor: "2", qty: 7 },
      { tableFor: "3", qty: 6 },
      { tableFor: "6", qty: 3 },
    ];
    return new Response(JSON.stringify(data), { status: 200 });
    //   res.json(data);
  } catch (error) {
    return new Response("Failed to fetch prompt", { status: 500 });
  }
};

// import { connectToDB } from "@utils/database";
// import Prompt from "@models/prompt";
// // GET (read)

// export const GET = async (req, { params }) => {
//   try {
//     // console.log(params);
//     await connectToDB();
//     const prompt = await Prompt.findById(params.id).populate("creator");
//     if (!prompt) {
//       return new Response("Prompt not found", { status: 404 });
//     }
//     // console.log(prompt, "THERE IS PROMPT");
//     return new Response(JSON.stringify(prompt), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to fetch prompt", { status: 500 });
//   }
// };
