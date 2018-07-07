document.getElementById("button").addEventListener('click',function(){
    run(gen).catch(function(err){
        alert(err.message);
    });
});

function run(genFunc){
    const genObject= genFunc(); //creating a generator object

    function iterate(iteration){ //recursive function to iterate through promises
        if(iteration.done) //stop iterating when done and return the final value wrapped in a promise
            return Promise.resolve(iteration.value);
        return Promise.resolve(iteration.value) //returns a promise with its then() and catch() methods filled
        .then(x => iterate(genObject.next(x))) //calls recursive function on the next value to be iterated
        .catch(x => iterate(genObject.throw(x))); //throws an error if a rejection is encountered
    }

    try {
        return iterate(genObject.next()); //starts the recursive loop
    } catch (ex) {
        return Promise.reject(ex); //returns a rejected promise if an exception is caught
    }
}

function *gen(){
    //check if input is valid
    let input = document.getElementById("input").value;
    if(input > 7 || input < 1 ){
        throw new Error("Invalid Input - Enter a number between 1 and 7");
    }


    //fetch the film
    let filmResponse = yield fetch("https://swapi.co/api/films/" + input);
    let film = yield filmResponse.json();

    //fetch the characters
    let characters = film.characters;
    let characterString = "Characters: <br>\n<ol>\n";
    for(let i = 0; i < characters.length ; i++){
        let tempCharacterResponse = yield fetch(characters[i]);
        let tempCharacter = yield tempCharacterResponse.json();
        characterString += "<li> "+tempCharacter.name + "</li>";
    }
    characterString += "</ol>\n</br>";

    //display film title and characters in the film
    document.getElementById("filmsText").innerHTML = "Film: <br>" + film.title;
    document.getElementById("peopleText").innerHTML = characterString;
}
