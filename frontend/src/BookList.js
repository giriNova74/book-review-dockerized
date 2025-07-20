// frontend/src/BookList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>📚 Book Reviews</h2>
      <ul>
        {books.map((book, idx) => (
          <li key={idx}>
            <strong>{book.title}</strong> by {book.author}
            <p>{book.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
