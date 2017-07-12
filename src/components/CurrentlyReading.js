import React, { Component } from 'react';
import Spinner from './Spinner';
import BookListItem from './BookListItem';

class CurrentlyReading extends Component {

  render() {
    const {books,onMove} = this.props
    return (

<div className="w3-container">
	<div className = " w3-panel w3-bottombar w3-border-green ">
		<h3 className = "kp-satisfy">Currently Reading</h3>
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

export default CurrentlyReading;
