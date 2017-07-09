import React, { Component } from 'react';

class WantToRead extends Component {

  handleChange = (selected,book) => {
     this.props.onMove(book,selected)
   }

  render() {
    const {books} = this.props
    return (
      <div className="w3-container">

        <div className = " w3-panel w3-bottombar w3-border-green ">
          <h3 className = "kp-satisfy">Want to Read</h3>
        </div>
        
        {books.length ===0 &&(
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        )}

        <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=>
            <li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover w3-hover-shadow" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
										<div className="book-shelf-changer">
											<select value={book.shelf} onChange={(event)=>this.handleChange(event.target.value,book)}>
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
							</li>

          )}
        </ol>
      </div>
      </div>
    );
  }
}

export default WantToRead;
