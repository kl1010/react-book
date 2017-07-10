import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import BookListItem from './BookListItem';

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

  render(){
    const {query } = this.state
    const {books,onMove} = this.props


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
          {books.length ===0 && query !== ""&&(
            <Spinner />
          )}
            {books.length > 0 && books.map((book)=>
              <BookListItem key = {book.id} book ={book} onMove = {onMove}/>
            )}
        </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
