
// **************************  IMPORTANT NOTE  **************************

// There are three different code snippets below. The first two code snippets do not mutate the original objects, 
// while the third code snippet mutates the original objects.

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

// Code 1 - No Mutation of original objects

let averageMovieRatings1 = movieRatings
    .map((movies) => {
        let total = movies.ratings.reduce((acc, curr) => acc + curr);
        let average = total / movies.ratings.length;
        return {title: movies.title, averageMovieRatings: average.toFixed(2)};
    });
    

console.log(averageMovieRatings1);
console.log(movieRatings);

// Code 2 - No Mutation of original objects

let averageMovieRatings2 = movieRatings
    .map((movies) => {
        let total = movies.ratings.reduce((acc, curr) => acc + curr);
        let average = total / movies.ratings.length;
        return {title: movies.title, ratings: average.toFixed(2)};
    });
    

console.log(averageMovieRatings2);
console.log(movieRatings);

// Code 3 - Mutation of original objects

let averageMovieRatings3 = movieRatings
    .map((movies) => {
        let total = movies.ratings.reduce((acc, curr) => acc + curr);
        let average = total / movies.ratings.length;
        movies.ratings = average;
        return movies;
    });
    

console.log(averageMovieRatings3);
console.log(movieRatings);

