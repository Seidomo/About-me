
'use strict'

/////////// Function Section /////////////
// Question 1 of Questionnaire -- copy this for Q2 - Q5
/*function questionOne(userAnswer = 'yes'){
    if(userAnswer === 'yes'){
        alert('Sorry, I am not a vegan');
    } else if(userAnswer === 'no'){
        alert('You got it right');
    }
}


function questionSeven(userAnswer = cat, userAnswer = dog,){
    var animalsIlike = ['dog', 'cat', 'monkey', 'lama', 'parrot', 'squirrel','penguin'];     
        if (userAnswer === 'cat'){
            alert('You got it right!');        
        } else if(userAnswer === 'dog'){
            alert('You got it right!');
        } else if(userAnswer === 'monkey', 'lama', 'parrot', 'squirrel'){
            alert('No, you got it wrong.');
        }
    }






// Function call section

questionOne(prompt('Do you think I am a vegan?'));

for(var i=0; i < 7; i++){
    questionSeven(prompt('Hey, what is my favorite animal?'));
    if (userAnswer === 'cat', 'dog'){  //getting an error on this line --> "userAnswer is not defined"
        break;
    }
}*/




////////// End of Function Section /////////

 var correctAnswers = 0;

var userName = prompt("please enter your name?");
//console.log('Greetings  ' + userName);
alert('Greetings  ' + userName);
function aboutBeingvegan(){
var aboutVegan = prompt('Hi ' + userName + ' do you think i am a vegan? ');

if (aboutVegan === 'no') {
    //console.log('yap you got right');
    correctAnswers++
    alert('yap you got right');
}
else if (aboutVegan.toLowerCase() === 'yes') {
    //console.log ('Sorry no am not a vegan ');
    alert('Sorry no am not a vegan ');
}
else {
    //console.log('please answer yes or no');
    alert('please answer yes or no');
}
}
function aboutHaircolor(){
var hairColor = prompt('Hi ' + userName + ' Do you think my hair color is white ?');


if (hairColor.toLowerCase() === 'yes') {
    //console.log('No sorry its black');
    alert('No sorry its black');

}
else if (hairColor.toLowerCase() === 'no') {
    //console.log ('You right its not please click ok to continue');
    correctAnswers++
    alert('You right its not please click ok to continue');
}
else {
    // console.log('please answer yes or no');
    alert('please answer yes or no');
}
}
function aboutFavoritecolor(){ 

var favoriteColor = prompt('Hi ' + userName + ' Do you think my favorite color is Blue ?');

if (favoriteColor.toLowerCase() === 'yes') {
    //console.log('Applause '  + userName + ' you got it please click ok to continue');
    alert('Applause ' + userName + ' you got it please click ok to continue');
    correctAnswers++
}
else if (favoriteColor.toLowerCase() === 'no') {
    //console.log('Sorry no its Blue');
    alert('Sorry no its Blue');
}
else {
    //console.log('please answer yes or no');
    alert('please answer yes or no');
}
}
function aboutFavoriteteam(){
var favoriteTeam = prompt('Hi ' + userName + ' Is Seahawks my favorite team ?');

if (favoriteTeam.toLowerCase() === 'yes') {
    //console.log('GO HAWKS you got it right');
    alert('GO HAWKS you got it right');
   correctAnswers++
}
else if (favoriteTeam.toLowerCase() === 'no') {
    //console.log( 'No i am a SEAHAWKS fan');
    alert('No i am a SEAHAWKS fan');
}
else {
    //console.log('please answer yes or no');
    alert('please answer yes or no');
}
}
function aboutFavoritecity(){
var favoriteCity = prompt('Hi ' + userName + ' Do you think Portland is my favorite city ?');

if (favoriteCity.toUpperCase() === 'NO') {
    //console.log('yeaaaa its Seattle ' + userName + ' thanks for visiting my website');
    alert('yeaaaa its Seattle ' + userName + ' thanks for visiting my website');
    correctAnswers++
}
else if (favoriteCity.toUpperCase() === 'YES') {
    //console.log('noooo its Seattle. ' + userName + ' thanks for visiting my website');
    alert('noooo its Seattle. ' + userName + ' thanks for visiting my website');
}

else {
    // console.log('please answer yes or no');
    alert('please answer yes or no');
}
}
     //var userName = prompt("please enter your name?");
    //console.log('Greetings  ' + userName);
   //alert('Greetings  ' + userName);

function aboutFavoritenumber(){
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
function aboutAnimalsilike(){
var animalsIlike = ['dog', 'cat', 'monkey', 'lama', 'parrot', 'squirell','penguin'];

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






      /// Function invoking area.

aboutBeingvegan();
aboutHaircolor();
aboutFavoritecolor();
aboutFavoriteteam();
aboutFavoritecity();
aboutFavoritenumber();
aboutAnimalsilike();

alert('you got ' + correctAnswers + ' answers thanks for visiting my site!')