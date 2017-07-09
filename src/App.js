import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Header from './components/Header';
import CurrentlyReading from './components/CurrentlyReading';
import WantToRead from './components/WantToRead';
import AlreadyRead from './components/AlreadyRead';
import Footer from './components/Footer';
import SearchBooks from './components/SearchBooks';

class App extends Component {

state ={
      read:[],
      currentlyReading:[],
      wantToRead:[],
      search:[]
    }


  moveBooks = (book,shelf)=>{
    BooksAPI.update(book,shelf)
    this.getAll()
    }

  searchBooks = (query)=>{
    if(query !== ""){
      BooksAPI.search(query).then((data)=>{
        try{
          this.setState({search:data})
        } catch(e){
            this.setState({search:[]})
            console.log("No result Found")
        }
      })
    } else{
      this.setState({search:[]})
    }
  }

  getAll =()=>{
    BooksAPI.getAll().then((data) => {
      const al = data.filter((book)=>book.shelf ==='read')
      const cr = data.filter((book)=>book.shelf ==='currentlyReading')
      const wr = data.filter((book)=>book.shelf ==='wantToRead')
      this.setState({read:al})
      this.setState({currentlyReading:cr})
      this.setState({wantToRead:wr})
    })
  }
  componentDidMount() {
    this.getAll()
}
  render() {
    const {read,currentlyReading,wantToRead,search}=this.state
    return (
      <div className="App">

        <Route exact path = "/" render={()=>(
          <div>
            <Header />

            <CurrentlyReading books ={currentlyReading} onMove = {this.moveBooks} />
            <WantToRead books ={wantToRead} onMove = {this.moveBooks} />
            <AlreadyRead books ={read} onMove = {this.moveBooks} />

            <Footer />
          </div>
        )} />

          <Route path ="/search" render={({history})=>(
            <div>
              <Header />
              <SearchBooks searchResults={search} onSearch = {this.searchBooks} onMove = {this.moveBooks}/>
            </div>
          )} />

      </div>
    );
  }
}

export default App;
