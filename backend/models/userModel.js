import  Mongoose  from "mongoose";
import  bcrypt from 'bcryptjs'

const userSchema = Mongoose.Schema ({
    name:{
        type: String,
        requried:true
    },
    email:{
        type: String,
        requried:true,
        unique:true
    },
    profileImgUrl: {
        type: String,
      },
    password:{
        type: String,
        requried:true
    },
},{
    timestamps:true
})
userSchema .pre('save',async function (next){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

const User = Mongoose.model('User',userSchema)

export default User