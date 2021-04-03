import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    Username: {type:String, required:true},
    Password: {type:String, required:true},
    Email : {type:String, required: true},
    Image: {type:String, required: false},
    Foreign: {type:Array, default: []},
    Joined:{type: Date, default: Date.now}
});

export default mongoose.model('User', userSchema);