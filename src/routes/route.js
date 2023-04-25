const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

// router.get("/test-me", function (req, res) {
//   res.send("This should be working!");
// });
router.get("/sol1", function (req, res) {
  //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
  let arr = [1, 2, 3, 5, 6, 7];
  let missingNumber;
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  missingNumber = sum - arrSum;
  res.send({ "The Missing Number Is": missingNumber });
});

router.get("/sol2", function (req, res) {
  //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
  let arr = [33, 34, 35, 37, 38];
  let missingNumber;
  let n = arr.length + 1;
  let sum = (n * (arr[0] + arr[n - 2])) / 2;
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  missingNumber = sum - arrSum;
  res.send({ "The Missing Number is": missingNumber });
});

module.exports = router;
