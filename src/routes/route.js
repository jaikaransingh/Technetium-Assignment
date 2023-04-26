const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

// router.get("/test-me", function (req, res) {
//   res.send("This should be working!");
// });
let persons = [
  {
    name: "PK",
    age: 10,
    votingStatus: false,
  },
  {
    name: "SK",
    age: 20,
    votingStatus: false,
  },
  {
    name: "AA",
    age: 70,
    votingStatus: false,
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false,
  },
  {
    name: "HO",
    age: 40,
    votingStatus: false,
  },
];

router.post("/voting", function (req, res) {
  const age = req.query.votingAge;

  if (!age) {
    res.send("Enter some Value");
  }
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= age) {
      persons[i].votingStatus = true;
    }
  }
  const eligible = persons.filter((person) => person.votingStatus);

  res.send(eligible);
});

module.exports = router;
