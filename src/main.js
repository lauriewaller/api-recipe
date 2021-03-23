import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import RecipeOne from './js/recipe-one-service.js';
import RecipeTwo from './js/recipe-two-service.js';

function displayRecipeOne(response) {
  let url = response.hits[0].recipe.ingredientLines;
  console.log(url);
  $('.ingredient1').text(`${url}`);
}

function displayRecipeTwo(response) {
  let url = response.hits[1].recipe.ingredientLines;
  console.log(url);
  $('.ingredient2').text(`${url}`);
}

function displayErrors(error) {
  $('.showErrors').text(`${error}`);
}


$("#recipe-button").click(function(event) {
  event.preventDefault();
  let ingredient1 = $('#ingredient1').val();
  let ingredient2 = $('#ingredient2').val();
  RecipeOne.getRecipeOne(ingredient1)
    .then(function(recipeOneResponse) {
      if (recipeOneResponse instanceof Error) {
        throw Error(`Recipe One API error: ${recipeOneResponse.message}`);
      }
      displayRecipeOne(recipeOneResponse);
      return RecipeTwo.getRecipeTwo(ingredient2);
    })
    .then(function(recipeTwoResponse) {
      if (recipeTwoResponse instanceof Error) {
        throw Error(`Recipe Two API error: ${recipeTwoResponse.message}`);
      }
      displayRecipeTwo(recipeTwoResponse);
    })
    .catch(function(error) {
      displayErrors(error.message);
    })
});


