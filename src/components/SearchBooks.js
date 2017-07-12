import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import BookListItem from './BookListItem';
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  state = {
    query : "",
    searchResults: []
  }

onSearch = (query)=>{
  if(query !== ""){
      BooksAPI.search(query).then((data)=>{
        try{
            data.forEach(x=>{
              this.props.books.forEach(y=>{
                if(x.id === y.id){
                  x.shelf = y.shelf
                }
              })
            })
          this.setState({searchResults:data})
        }catch(e){
          this.setState({searchResults:[]})
        }
      })
    } else {
      this.setState({searchResults:[]})
    }
  }


updateQuery =(query)=>{
    this.onSearch(query)
  if(query){
    this.setState({query: query.trim()})
  }else{
    this.setState({query: ""})
  }
}

  render(){
    const {query,searchResults} = this.state
    const {books,onMove} = this.props

    return (
      <div className="w3-container">
        <div className="w3-left w3-padding kp-bottom">
          <Link to = "/" className ="w3-btn w3-green" >Back</Link>
        </div>
        <div className = "w3-container w3-padding w3-margin ">
          <input className="w3-input w3-center" placeholder="Search here" value = {query} onChange = {(event)=> this.updateQuery(event.target.value)} />
        </div>

        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.length ===0 && query !== ""&&(
            <Spinner />
          )}
            {searchResults.length > 0 && searchResults.map((book)=>
              <BookListItem key = {book.id} book ={book} onMove = {onMove}/>
            )}
        </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
