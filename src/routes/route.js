const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const logger=require('../logger/logger');
const util=require('../util/helper');
const validator=require('../validator/formatter');
const lodash = require('lodash');
// const commonFile = require('./common')

router.get('/test-me', function (req, res) {
  logger.welcome("Jai Karan Singh");
  util.printDate();
  util.currentMonth();
  util.getBatchInfo("Technetium", "W3D3", "NodeJS Module");
  validator.rmsp("    Functiion Up   ");
  validator.toLowerCase("FUNCTIonUP");
  validator.toUpperCase("FunctionUP");

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(lodash.chunk(monthsOfYear, 3));

  const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(lodash.tail(oddNumbers));

  let a=[1,2,2,2,2,3,3];
  let b=[2,2,3,3,4];
  let c=[1,2,2,4,5];
  let d=[1,2,3,3,4];
  let e=[1,2,2,2,2,3];
  console.log(lodash.union(a, b, c, d, e));
  
  let objarr = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];
  console.log(lodash.fromPairs(objarr));

  
  res.send("This should be working!");
});




module.exports = router;