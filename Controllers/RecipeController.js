import Recipes from "../Schemas/Recipe.js";

/*
*   Create recipe, require all fields, even if they're empty (Recipe, Ingredients, Description).
*   However, name and the five basic tastes need to be there with actual values (Validate in backend with JOI)
*/

export const createRecipe = (req, res) => {

    //console.log(req.body.Recipe)

    const recipe = req.body.Recipe;

    const newEntry = new Recipes({
        Name: recipe.Name,
        Umami: {calcValue : recipe.Umami, realValue: recipe.Umami},
        Bitter: {calcValue : recipe.Bitter, realValue: recipe.Bitter},
        Sour: {calcValue : recipe.Sour, realValue: recipe.Sour},
        Salty: {calcValue : recipe.Salty, realValue: recipe.Salty},
        Sweet: {calcValue : recipe.Sweet, realValue: recipe.Sweet},
        Description: recipe.Description,
        Ingredients: recipe.Ingredients,
        Recipe: recipe.Recipe
    })

    newEntry.save( (err) => {

        if(err){
            res.status(400).send('Could not save')
        }else{
            res.status(200).send('Saved correctly')
        }
    })

}


/*
*   Function to find recipes based on values for five tastes
*
*   (Eventually need to update to account for extra filters, so try to make it extendable)
*
*/
export const getRecipes = (req, res) => {

    const Search = JSON.parse(req.query.Taste);
    console.log(Search);

    Recipes.
    find().
    where('Umami.calcValue').equals(Search.Umami).
    where('Bitter.calcValue').equals(Search.Bitter).
    where('Sour.calcValue').equals(Search.Sour).
    where('Salty.calcValue').equals(Search.Salty).
    where('Sweet.calcValue').equals(Search.Sweet).
    exec((error, result) => {

        if(error){

            res.status(500).send('Error with database transaction');

        }else if(result.length === 0){
            res.status(404).send('No recipes match your input');
        }else{

            const toReturn = result.map( (data) => {

                return {
                    RecipeID: data._id,
                    Name: data.Name,
                    Description: data.Description,
                    Ingredients: data.Ingredients
                };
            })

            res.status(200).send(toReturn);
        }

    })

}

/*
*   Finds the most clicked recipes (most popular) in the database and returns them to be displayed upon loading of FoodSearch component
 */

export const getTopRecipes = (req, res) => {

    Recipes.find().sort('-Clicks').limit(3).exec( (err, result) => {

        const toReturn = result.map( (data) => {

            return {
                RecipeID: data._id,
                Name: data.Name,
                Description: data.Description,
                Ingredients: data.Ingredients
            };
        })

        res.status(200).send(toReturn);

    });


}