import dbConnect from "@/util/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
    await dbConnect();
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    console.log(user);


    if (user) {
        res.status(400).json({ message: "User already exists" });
        return;
    }

    try {


        const newUser = await new User(body);

        // generate push the password
        const salt = await bcrypt.genSalt(10);

        // create hash
        newUser.password = await bcrypt.hash(newUser.password, salt);
        newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);

        await newUser.save();
        res.status(200).json(newUser);
        // set password to hashed

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error sadsds" });
    }
}

export default handler;
