const faker = require("faker");
const mongoose = require("mongoose");
const Profile = require("../database/model");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createProfile() {
  let count = 0;
  return Array.from({ length: 1000 }, () => {
    let id = count;
    count++;
    return {
      _id: id.toString(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      description: faker.lorem.sentence(),
      location: faker.address.state,
      name: `${faker.name.firstName} ${faker.name.lastName}`,
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
