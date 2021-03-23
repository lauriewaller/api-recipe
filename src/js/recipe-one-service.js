/* eslint-disable */
export default class RecipeOne {
  static getRecipeOne(ingredientOne) {
    return fetch(`https://api.edamam.com/search?q=${ingredientOne}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`)
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