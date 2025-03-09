const { User, Post } = require('../models');

const userData = [
  {
    username: "leonis",
    email: "leonhsu95@gmail.com",
    password: "admin12345"
  },
  {
    username: "saladtini",
    email: "lernantino@hotmail.com",
    password: "password12345"
  },
  {
    username: "zaconium",
    email: "zli0@gmail.com",
    password: "zacPW1234"
  },
  {
    username: "amiChopsticks",
    email: "amiko@yahoo.com",
    password: "password12345"
  },
  {
    username: "DallioHax",
    email: "dalliohax0@gmail.com",
    password: "dHaxer9519"
  }
];

const postData = [
  {
    title: "Post 1",
    content: "Content for post 1",
    user_id: 1,
  },
  {
    title: "Post 2",
    content: "Content for post 2",
    user_id: 2,
  },
  {
    title: "Post 3",
    content: "Content for post 3",
    user_id: 3,
  },
  {
    title: "Post 4",
    content: "Content for post 4",
    user_id: 4,
  },
  {
    title: "Post 5",
    content: "Content for post 5",
    user_id: 5,
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

const seedPosts = () => Post.bulkCreate(postData);

module.exports = { seedUsers, seedPosts };