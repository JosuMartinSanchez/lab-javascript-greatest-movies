// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map((eachMovie) => {
    return eachMovie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesPar) {
  let stevenDrama = moviesPar.filter((eachMovie) => {
    return (
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
    );
  });
  return stevenDrama.length;
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrM) {
  if (arrM.length === 0) {
    return 0;
  }
  let bestP = arrM.reduce((acc, eachMovie) => {
    if (eachMovie.score === undefined) {
      return acc;
    } else {
      return acc + eachMovie.score;
    }
  }, 0);
  let roundNumer = bestP / arrM.length;
  let twoRoundNumer = roundNumer.toFixed(2);
  let twoRoundNumerp = +twoRoundNumer;
  return twoRoundNumerp;
}
//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrM) {
  let dramaA = arrM.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama');
  });
  let dramaAv = dramaA.reduce((acc, eachMovies) => {
    if (dramaA !== undefined) {
      return acc + eachMovies.score;
    } else {
      return acc;
    }
  }, 0);
  let roundNumer = dramaAv / dramaA.length;
  let twoRoundNumer = roundNumer.toFixed(2);
  let twoRoundNumerp = +twoRoundNumer;
  return twoRoundNumerp;
}
//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrM) {
  let newArr = JSON.parse(JSON.stringify(movies));
  let year = newArr.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else {
      if (elem1.title[0] > elem2.title[0]) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return year;
}
//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrM) {
  if (arrM.length < 20) {
    return arrM;
  } else {
  }
  let twentyArr = arrM.slice(0, 20);
  let twentyOrder = twentyArr.sort((elem1, elem2) => {
    if (elem1.title[0] > elem2.title[0]) {
      return 1;
    } else {
      return -1;
    }
  });
  let title = twentyOrder.map((eachMovie) => {
    return eachMovie.title;
  });
  return title;
}

//console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
