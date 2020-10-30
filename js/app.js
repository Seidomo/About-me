
'use strict'

/*var correctAnswers = 0;

var userName = prompt("please enter your name?");

alert('Greetings  ' + userName);
function aboutBeingvegan() {
    var aboutVegan = prompt('Hi ' + userName + ' do you think i am a vegan? ');

    if (aboutVegan === 'no') {

        correctAnswers++
        alert('yap you got right');
    }
    else if (aboutVegan.toLowerCase() === 'yes') {

        alert('Sorry no am not a vegan ');
    }
    else {

        alert('please answer yes or no');
    }
}
function aboutHaircolor() {
    var hairColor = prompt('Hi ' + userName + ' Do you think my hair color is white ?');


    if (hairColor.toLowerCase() === 'yes') {

        alert('No sorry its black');

    }
    else if (hairColor.toLowerCase() === 'no') {

        correctAnswers++
        alert('You right its not please click ok to continue');
    }
    else {
        ;
        alert('please answer yes or no');
    }
}
function aboutFavoritecolor() {

    var favoriteColor = prompt('Hi ' + userName + ' Do you think my favorite color is Blue ?');

    if (favoriteColor.toLowerCase() === 'yes') {

        alert('Applause ' + userName + ' you got it please click ok to continue');
        correctAnswers++
    }
    else if (favoriteColor.toLowerCase() === 'no') {

        alert('Sorry no its Blue');
    }
    else {

        alert('please answer yes or no');
    }
}
function aboutFavoriteteam() {
    var favoriteTeam = prompt('Hi ' + userName + ' Is Seahawks my favorite team ?');

    if (favoriteTeam.toLowerCase() === 'yes') {

        alert('GO HAWKS you got it right');
        correctAnswers++
    }
    else if (favoriteTeam.toLowerCase() === 'no') {

        alert('No i am a SEAHAWKS fan');
    }
    else {

        alert('please answer yes or no');
    }
}
function aboutFavoritecity() {
    var favoriteCity = prompt('Hi ' + userName + ' Do you think Portland is my favorite city ?');

    if (favoriteCity.toUpperCase() === 'NO') {
        alert('yeaaaa its Seattle ' + userName + ' thanks for visiting my website');
        correctAnswers++
    }
    else if (favoriteCity.toUpperCase() === 'YES') {
        alert('noooo its Seattle. ' + userName + ' thanks for visiting my website');
    }

    else {

        alert('please answer yes or no');
    }
}
function aboutFavoritenumber() {
    var favoriteNumber = 9;

    for (var i = 0; i < 3; i++) {
        var guessingNumber = parseInt(prompt('Hey ' + userName + ' guess my favorite number?'));

        if (guessingNumber === favoriteNumber) {
            alert('Yeaaaaa that\'s right! Welcome to my site');
            correctAnswers++
            break;
        }
        else if (guessingNumber > favoriteNumber) {
            alert('No that\'s too high please try again!');
        }
        else if (guessingNumber < favoriteNumber) {
            alert('No that\'s too low please try again!');
        }
        if (i === 2) {
            alert('sorry you missed all the asnwers let\'s go to the final questioner');
        }
    }
}
function aboutAnimalsilike() {
    var animalsIlike = ['dog', 'cat', 'monkey', 'lama', 'parrot', 'squirell', 'penguin'];

    for (var i = 0; i < 7; i++) {
        var favoriteAnimals = prompt('Hey ' + userName + ' what\'s my favorite animal?').toLowerCase();
        var answerCorrect = false;
        for (var j = 0; j < animalsIlike.length; j++) {

            if (favoriteAnimals === animalsIlike[j]) {
                answerCorrect = true;
                correctAnswers++
                break;
            }
        }
        if (answerCorrect === true) {
            alert(userName + ' you are right Welcome to my site.');
            break;
        } else { alert(userName + ' you wrong can you please try again?'); }
        if (i === 6) {
            alert('Sorry you missed your chances Goodbye');
        }

    }
}
 araboutBeingvegan();
aboutHaircolor();
aboutFavoritecolor();
aboutFavoriteteam();
aboutFavoritecity();
aboutFavoritenumber();
aboutAnimalsilike();

alert('you got ' + correctAnswers + ' answers thanks for visiting my site!')