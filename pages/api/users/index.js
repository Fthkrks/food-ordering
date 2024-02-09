import dbConnect from "@/util/dbConnect"
import User from "@/models/User";

const handler = async (req, res) =>{
    await dbConnect();
    const {method} = req;

    if(method === "GET"){
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    }

    if(method === "POST"){
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        } catch (error){
            console.log(error);
            
        }
    }
}


export default handler