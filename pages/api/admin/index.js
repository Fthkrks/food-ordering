import cookie from "cookie";

const handler = (req, res) => {
  const { method } = req;
  
  if (method === "POST") {
    const { name, password } = req.body;
    if (
      name === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-cookie",
        cookie.serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ message: "Succesfull" });
    } else {
      res.status(400).json({ message: "Wrong Credentials" });
    }
  }

  if (method === "PUT") {
    res.setHeader(
      "Set-cookie",
      cookie.serialize("token", process.env.ADMIN_TOKEN, {
        maxAge: -1,
        path: "/",
      })
    );
    res.status(200).json({ message: "Succesfull" });
  }
};

export default handler;
