const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
   object.entries(recipes);
   var newRecipes = recipes[key] = value;
   object.value(recipes);
    recipes[key] = value;
    
    return(recipes, newRecipes);
}
