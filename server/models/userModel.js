const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema
const validator = require("validator")
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

//static signup method
userSchema.statics.signup = async function(name,email,username,password) {

    //validation
    if(!name || !email || !username || !password){
        throw Error('all fields must be fields')
    }
    if(!validator.isEmail(email)){
        throw Error('email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('not a strong password')
    }

    const exists = await this.findOne({email});
    if(exists){
        throw Error('email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({name,email,username,password:hash})

    return user;

}

//static login method

userSchema.statics.login = async function(email,password){
    //validation
    if(!email || !password){
        throw Error('All fields must be fields')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    const user = await this.findOne({email});
    if(!user){
        throw Error('invalid email id ');
    }

    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error('invalid password');
    }

    return user;

}

module.exports = mongoose.model('User',userSchema)