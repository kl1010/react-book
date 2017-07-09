import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    query : "",
  }

  updateQuery =(query)=>{
    this.props.onSearch(query)
  if(query !== ""){
    this.setState({query: query.trim()})
  }else{
    this.setState({query: ""})
  }
}
handleChange = (selected,book) => {
   this.props.onMove(book,selected)
 }



  render(){
    const {query } = this.state
    const {searchResults} = this.props


    return (
      <div className="w3-container">
        <div className="w3-left w3-padding kp-bottom">
          <Link to = "/" className ="w3-btn w3-green">Back</Link>
        </div>
        <div className = "w3-container w3-padding w3-margin ">
          <input className="w3-input w3-center" placeholder="Search here" value = {query} onChange = {(event)=> this.updateQuery(event.target.value)} />
        </div>

        <div className="bookshelf-books">
          <ol className="books-grid">
          {searchResults.length ===0 && query !== ""&&(
            <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          )}
            {searchResults.length > 0 && searchResults.map((book)=>
              <li key={book.id}>
                  <div className="book" >
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
                  </div>
                </li>
            )}
        </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
