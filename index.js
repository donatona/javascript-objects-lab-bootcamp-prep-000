const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
   //object.entries(recipes);
  // var newRecipes = recipes[key] = value;
  // object.value(recipes);
  //  recipes[key] = value;
    
   // return(recipes, newRecipes);
   recipes[key]=value;
   return(recipes);
}
var playlist = {artistName: `songTitle`};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return(playlist);
}

function removeFromPlaylist(playlist, artistName) {

  delete playlist[artistName];

  delete playlist.artistName;

  return(playlist);
}

