import React, { Component } from 'react';

class BookListItem extends Component {

  render() {
    const {book,onMove} = this.props
    return (
      <div className="w3-container">

        <div className="bookshelf-books">
        <ol className="books-grid">
            <li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover w3-hover-shadow" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
										<div className="book-shelf-changer">
											<select value={book.shelf} onChange={(event)=>onMove(book,event.target.value)}>
												<option value="none" disabled>Move to...</option>
												<option value="currentlyReading">Currently Reading</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">None</option>
											</select>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
                  <p>{book.shelf}</p>
                  {book.authors.map((author)=>
                    <div key={author} className="book-authors">{author}</div>
                  )}
								</div>
							</li>
        </ol>
      </div>

      </div>
    );
  }
}

export default BookListItem;
