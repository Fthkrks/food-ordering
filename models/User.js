import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            
        },

        email:{
            type: String,
            required: true
        },
        
        password:{
            type: String,
            required: true
        },

        confirmPassword:{
            type: String,
            required: true
        },

        emailVerified:{
            type: String,
            default: null
        },
        
        job:{
            type: String,
        },
        
        phonenumber:{
            type: String
        },

        address:{
            type: String
        },

        bio:{
            type: String
        }
    },
    {timestamps: true}
);


export default mongoose.models.User || mongoose.model('User', UserSchema);