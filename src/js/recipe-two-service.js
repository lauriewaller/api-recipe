/* eslint-disable */
export default class RecipeTwo {
  static getRecipeTwo(ingredientTwo) {
    return fetch(`https://api.edamam.com/search?q=${ingredientTwo}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      }) 
  }
}


