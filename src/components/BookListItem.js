import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookListItem extends Component {
  static propTypes = {
      book: PropTypes.object.isRequired,
      onMove: PropTypes.func.isRequired
    }

  render() {
    const {book,onMove} = this.props
    return (
      <div className="w3-container">
            <li key={book.id}>
								<div className="book" >
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
                  {book.authors.map((author)=>
                    <div key={author} className="book-authors">{author}</div>
                  )}
								</div>

                {book.hasOwnProperty('averageRating') &&(
                  <div>
                  <div>Average Rating</div>
                  <div className="w3-grey">
                    <div className="w3-container w3-green w3-center" style={{width:book.averageRating*28.0}}>{book.averageRating}</div>
                  </div>
                  </div>
                )}
                {!book.hasOwnProperty('averageRating') &&(
                  <div>Average Rating: N/A </div>
                )}

							</li>
      </div>
    );
  }
}

export default BookListItem;
