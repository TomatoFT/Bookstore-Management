import React from 'react';
import './BookPage.css';

var book_info = {title:"Mountain", author:"TC", description:"Good book", coverImage:'./mountain.png'}

function BookPage({ book=book_info }) {
  return (
    <div className="book-page">
      <div className="book-info">
        <div className="book-details">
          <h1 className="book-title">{book.title}</h1>
          <h2 className="book-author">By {book.author}</h2>
          <p className="book-description">{book.description}</p>
        </div>
      </div>
      <div className="book-cover-container">
        <img className="book-cover" src={require('./mountain.png')} alt={book.title} />
      </div>
    </div>
  );
}

export default BookPage;
