import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import _ from 'lodash';
import * as BooksAPI from './BooksAPI'
import Header from './components/Header';
import CurrentlyReading from './components/CurrentlyReading';
import WantToRead from './components/WantToRead';
import AlreadyRead from './components/AlreadyRead';
import Footer from './components/Footer';
import SearchBooks from './components/SearchBooks';

class App extends Component {

state ={
      search:[],
      books:[]
    }

  moveBook = (book,shelf)=>{
    BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf
          this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([ book ])
          }))
        })
    }

  searchBooks = (query)=>{
    if(query !== ""){
      BooksAPI.search(query).then((data)=>{
        try{
          console.log(data)
        }catch(e){
          console.log("No results", e)
        }
      })
    }}

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({books:data})
    })
}
  render() {
    const {books,search}=this.state
    return (
      <div className="App">
        <Header />
        <Route exact path = "/" render={()=>(
          <div>

            <CurrentlyReading books ={books.filter((book)=>book.shelf ==='currentlyReading')} onMove = {this.moveBook} />
            <WantToRead books ={books.filter((book)=>book.shelf ==='wantToRead')} onMove = {this.moveBook} />
            <AlreadyRead books ={books.filter((book)=>book.shelf ==='read')} onMove = {this.moveBook} />

            <Footer />
          </div>
        )} />

          <Route path ="/search" render={({history})=>(
            <div>
              <SearchBooks books={search} onSearch = {this.searchBooks} onMove = {this.moveBook}/>
            </div>
          )} />

      </div>
    );
  }
}


export default App;
