import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    Name: {type:String, required:true},
    Umami: {type: Number, required:true},
    Bitter: {type: Number, required:true},
    Sour: {type: Number, required:true},
    Salty: {type: Number, required:true},
    Sweet: {type: Number, required:true},
    Description : {type: String, required: true},
    Ingredients: {type: Array, required: false},
    Recipe: {type: String, required: false},
    Clicks: {type:String, required: true, default:0}
});

export default mongoose.model('Recipes', recipeSchema);