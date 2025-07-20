// backend/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./book');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Book.deleteMany();
  await Book.insertMany([
    { title: 'Atomic Habits', author: 'James Clear', review: 'Practical and motivating!' },
    { title: 'The Alchemist', author: 'Paulo Coelho', review: 'A philosophical adventure.' }
  ]);
  console.log('✅ Sample books seeded');
  process.exit();
});
