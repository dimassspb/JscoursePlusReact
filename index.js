'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoveDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
const question1 = 'Один из просмотренных фильмов?';
const question2 = 'На сколько оцените его?';

const answer1 = prompt(question1, '');
const answer2 = prompt(question2, '');
const answer3 = prompt(question1, '');
const answer4 = prompt(question2, '');

personalMoveDB.movies[answer1] = answer2;
personalMoveDB.movies[answer3] = answer4;

console.log(personalMoveDB);
