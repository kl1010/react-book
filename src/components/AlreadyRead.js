import React, { Component } from 'react';
import BookListItem from './BookListItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class AlreadyRead extends Component {
  static propTypes = {
      books: PropTypes.array.isRequired,
      onMove: PropTypes.func.isRequired
    }

  render() {
    const {books,onMove} = this.props
    return (
      <div className="w3-container">

        <div className = " w3-panel w3-bottombar w3-border-green ">
          <h3 className = "kp-satisfy">Already Read</h3>
        </div>

        {books.length ===0 &&(
          <Spinner />
        )}

        <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=>
            <BookListItem key = {book.id} book ={book} onMove = {onMove}/>
          )}
        </ol>
      </div>
      </div>
    );
  }
}

export default AlreadyRead;
