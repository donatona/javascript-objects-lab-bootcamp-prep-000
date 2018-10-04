const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 const newRecipes = Object.assign({},object);
 newRecipes[key] = value;
 return newRecipes;
}




