import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    Owner: {type: String, required: true},
    Name: {type:String, required:true, index: true},
    Description : {type: String, required: false},
    Cuisine: {type: String, required: false},
    Tags: {type: Array, required: false},
    Ingredients: {type: Array, required: false},
    Recipe: {type: Array, required: true},
    Clicks: {type:String, required: true, default: 0},
    TotalReviews: {type: Number, required: true, default: 0},
    Score: {type: Number, required: true, default: 0}
});



export default mongoose.model('Recipes', recipeSchema);