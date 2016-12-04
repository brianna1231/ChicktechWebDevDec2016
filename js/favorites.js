function createFavorite() {
    console.log( 'Creating a new favorites');
    var listofFavorites= document.getElementsByClassName("favorites");
    
    console.log(listofFavorites);
    var theFirstFavorite = listofFavorites.item(0);
    var theNewFavorite = theFirstFavorite.cloneNode(true);
    document.getElementById("content").appendChild(theNewFavorite);
    var newFavoriteTitle = document.getElementById("creator-title").value;
    var newFavoriteDescription = document.getElementById("creator-description");
    var newFavoriteMedia= document.getElementById("creator-media").value;
    theNewFavorite.getElementsByClassName("title")[0].innerHTML = newFavoriteTitle;
    theNewFavorite.getElementsByClassName("description")[0].innerHTML = newFavoriteDescription;
    theNewFavorite.getElementsByClassName("media")[0].innerHTML = newFavoriteMedia;
    // console.log("The title of the new favorite is" + newFavoriteTitle);
    
    
}

