/* eslint-disable max-len */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bio = {};

const questions = [
  `What's your name? Nicknames are also acceptable :) \n`,
  `What do you listen to while doing that? \n`,
  `What's an activity you like doing? \n`,
  `What's your favourite thing to eat? \n`,
  `Which meal is your favourite (eg: dinner, brunch, etc.) \n`,
  `Which sport is your absolute favourite? \n`,
  `What is your superpower? In a few words, tell us what you are amazing at! \n`,
];

const survey = (startIndex) => {
  rl.question(questions[startIndex], (answer) => {
    bio[`answer${startIndex + 1}`] = answer;
    
    if (startIndex === questions.length - 1) {
      const paragraph = generateBio(bio);
      console.log(paragraph);
      rl.close();
    } else {
      survey(startIndex + 1);
    }
  });  
}

const generateBio = (bio) => {
  let firstName = bio.answer1;
  let favMusic = bio.answer2;
  let favActivity = bio.answer3;
  let favFood = bio.answer4;
  let favMeal = bio.answer5;
  let favSport = bio.answer6;
  let superpower = bio.answer7;

  return `${firstName} loves listening to ${favMusic} while ${favActivity}, devouring ${favFood} for ${favMeal}, prefers ${favSport} over any other sport, and is amazing at ${superpower}.`
}

survey(0);


