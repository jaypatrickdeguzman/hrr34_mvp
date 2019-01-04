const faker = require("faker");
const mongoose = require("mongoose");
const Profile = require("../database/model");
const index = require("../database/index");
const csv = require("fast-csv");
const csvStream = csv.createWriteStream({ headers: true });
const fs = require("fs");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createProfile() {
  return {
    _id: new mongoose.Types.ObjectId(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    description: quotes[rand(0, 17)],
    location: faker.address.state(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    age: rand(21, 30),
    likes: rand(1, 100)
  };
}

const quotes = [
  "Cheese makes me fart...",
  "Kangaroos are scary...",
  "I see dead people...",
  "I swear I'm not an alcoholic...",
  "Single and ready to mingle...",
  "Do you lift bro?",
  "Mondays are the worst...",
  "Life is like a box of chocolates...",
  "I have $5 in the bank...",
  "Good vibes errday!",
  "I start my Mondays with wine...",
  "Adulting is hard...",
  "Android all the way!",
  "Zombies are coming y'all..",
  "Apple all the way!",
  "I have a six-pack.. Of Beer."
];

function seedDB() {
  let writableStream = fs.createWriteStream("profiles.csv");
  writableStream.on("finish", () => {
    console.log("DONE!");
  });
  csvStream.pipe(writableStream);
  for (let i = 0; i < 1000; i++) {
    csvStream.write(createProfile());
  }
  csvStream.end();
}

seedDB();
