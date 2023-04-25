const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

// router.get("/test-me", function (req, res) {
//   res.send("This should be working!");
// });
let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];
router.post("/players", function (req, res) {
  const { name, dob, gender, city, sports } = req.body;
  // const name =req.body.name
  if (!name || !dob || !gender || !city || !sports) {
    return res.send("Please provide all required fields.");
  }
  for (const player of players) {
    if (player.name === name) {
      return res.send("A player with that name already exists.");
    }
  }
  const newPlayer = { name, dob, gender, city, sports };
  players.push(newPlayer);
  res.send({ Successfull: players, status: true });
});

module.exports = router;
