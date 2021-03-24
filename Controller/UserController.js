import Recipes from "../Schemas/Recipe.js";

export const getRecipes = (req, res) => {

    const Search = JSON.parse(req.query.Taste);
    //console.log(Search);

    Recipes.find(Search).exec( (error, result) => {

        if(error){
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

    });
    
}

export const createRecipe = (req, res) => {

    console.log(req.body.Recipe)

    const recipe = req.body.Recipe;

    const newEntry = new Recipes({
        Name: recipe.Name,
        Umami: recipe.Umami,
        Bitter: recipe.Bitter,
        Sour: recipe.Sour,
        Salty: recipe.Salty,
        Sweet: recipe.Sweet,
        Description: recipe.Description,
        Ingredients: recipe.Ingredients,
        Recipe: recipe.Recipe,
        Clicks: 0
    })

    newEntry.save( (err) => {

        if(err){
            res.status(400).send('Could not save')
        }else{
            res.status(200).send('Saved correctly')
        }

    })

}

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

    })


}