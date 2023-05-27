export const GET = async (req, { params }) => {
  try {
    // console.log(params);
    const data = [
      { tableFor: "2", qty: 7 },
      { tableFor: "3", qty: 6 },
      { tableFor: "6", qty: 3 },
    ];
    return new Response(JSON.stringify(data), { status: 200 });
    // res.json(data);
  } catch (error) {
    return new Response("Failed to fetch prompt", { status: 500 });
  }
};
