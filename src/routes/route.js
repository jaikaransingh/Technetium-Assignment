const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

// router.get("/test-me", function (req, res) {
//   res.send("This should be working!");
// });
const movies = ["3 Idiots", "ChhiChhore", "Rang de Basanti", "Dil Chahta Hai"];

const films = [
  {
    id: 1,
    name: "3 Idiots",
  },
  {
    id: 2,
    name: "ChhiChhore",
  },
  {
    id: 3,
    name: "Rang de Basanti",
  },
  {
    id: 4,
    name: "Dil Chahta Hai",
  },
];

router.get("/movies", function (req, res) {
  res.send(movies);
});

router.get("/movies/:indexNumber", function (req, res) {
  const indexNumber = req.params.indexNumber;

  if (isNaN(indexNumber) || indexNumber < 0 || indexNumber >= movies.length) {
    return res.send("Invalid movie index");
  }
  const movie = movies[indexNumber];
  res.send(movie);
});

router.get("/films", function (req, res) {
  res.send(films);
});

router.get("/films/:filmId", function (req, res) {
  let filmId = req.params.filmId;
  if (filmId <= 0 || isNaN(filmId)) {
    res.send("Sorry! No Movie Exits (Try Some Positive Number)");
  } else if (filmId > films.length) {
    res.send("Sorry! No Movie Try Some Smaller Number");
  }
  res.send(films[filmId - 1]);
});
module.exports = router;
