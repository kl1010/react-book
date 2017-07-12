import React, { Component } from 'react';

class BookListItem extends Component {
  state ={
    descript : false
  }

handleMouseOver = ()=>{
  this.setState({descript:true})
}

handleMouseOut = ()=>{
  this.setState({descript:false})
}


  render() {
    const {book,onMove} = this.props
    return (
      <div className="w3-container">

        <div className="bookshelf-books w3-panel">
        <ol className="books-grid">
            <li key={book.id}>
								<div className="book" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
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
							</li>

        </ol>
        {this.state.descript === true &&
          (<div className = "w3-card-4" style = {{maxWidth:300,height:300,overflow:`scroll`}}>
            <div className = "w3-containter w3-blue"><h2>More Info</h2> </div>
            <h4><span className = "w3-text-blue">Subtitle</span> : {book.subtitle}</h4>
            <p><span className = "w3-text-blue">Publisher</span> : {book.publisher}</p>
            <p><span className ="w3-text-blue">Description</span> : {book.description}</p>
          </div>)
        }
      </div>

      </div>
    );
  }
}

export default BookListItem;
