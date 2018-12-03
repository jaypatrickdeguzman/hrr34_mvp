const faker = require("faker");
const mongoose = require("mongoose");
const Profile = require("../database/model");
const index = require("../database/index");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createProfile() {
  return Array.from({ length: 1000 }, () => {
    return {
      _id: new mongoose.Types.ObjectId(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      description: faker.lorem.sentence(),
      location: faker.address.state(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      age: rand(21, 30),
      likes: rand(1, 100)
    };
  });
}

const profiles = createProfile();

function seedDB() {
  Profile.create(profiles)
    .then(() => mongoose.connection.close())
    .catch(err => console.error(err));
}

seedDB();
