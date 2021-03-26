import mongoose from 'mongoose';

const decimal = mongoose.Types.Decimal128;

const recipeSchema = new mongoose.Schema({
    Name: {type:String, required:true, index: true},
    Umami: { calcValue: {type:Number, required: true} , realValue : {type:decimal} },
    Bitter: { calcValue: {type:Number, required: true} , realValue : {type:decimal} },
    Sour: { calcValue: {type:Number, required: true} , realValue : {type:decimal} },
    Salty: { calcValue: {type:Number, required: true} , realValue : {type:decimal} },
    Sweet: { calcValue: {type:Number, required: true} , realValue : {type:decimal} },
    Description : {type: String, required: false},
    Ingredients: {type: Array, required: false},
    Recipe: {type: Array, required: true},
    Clicks: {type:String, required: true, default:0},
    TotalReviews: {type: Number, required: true, default: 1}
});



export default mongoose.model('Recipes', recipeSchema);