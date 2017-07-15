import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import BookListItem from './BookListItem';
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onMove: PropTypes.func.isRequired
  }

  state = {
    query : "",
    searchResults: [],
    error:false
  }

onSearch = (query)=>{
  if(query ){
      BooksAPI.search(query).then((data)=>{
        try{
            data.forEach(x=>{
              this.props.books.forEach(y=>{
                if(x.id === y.id){
                  x.shelf = y.shelf
                }
              })
            })
          this.setState({searchResults:data,error:false})
        }catch(e){
          this.setState({searchResults:[],error:true})
          console.log("Error")
        }
      })
    } else {
      this.setState({searchResults:[]})
      console.log("Query is Empty")
    }
  }


updateQuery =(query)=>{
  if(query){
    this.setState({query: query})
  }else{
    this.setState({query: ""})
  }
    this.onSearch(query)
}

  render(){
    const {query,searchResults,error} = this.state
    const {books,onMove} = this.props

    return (
      <div className="w3-container">
        <div className="w3-left w3-padding kp-bottom">
          <Link to = "/" className ="w3-btn w3-green w3-round w3-large">Back</Link>
        </div>
        <div className = "w3-container w3-padding w3-margin ">
          <input className="w3-input w3-center" placeholder="Search here" onChange = {(event)=> this.updateQuery(String(event.target.value))} />
        </div>

        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.length ===0 && query !== ""&&(
            <Spinner />
          )}
          {error === true && query.length > 0 &&(
            <div className="w3-panel w3-red w3-padding w3-card">
            <h3>No results Found, please use different Keyword</h3>
            </div>
          )}
            {searchResults.length > 0 && searchResults.map((book)=>
              <BookListItem key = {book.id.concat(Math.random())} book ={book} onMove = {onMove}/>
            )}
        </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
