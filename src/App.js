import React from 'react'
import SearchBooks from './SearchBooks';
import ListBookShelfs from './ListBookShelfs';
import {Route} from 'react-router-dom';
import {BookDetails} from './BookDetails';
import * as BooksAPI from './BooksAPI';
import './App.css'



class BooksApp extends React.Component {


  state = {
    books : [],
    showSearchPage: false, 
    searchResults : []
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.setState((currentstate) => ({ 
        books: books.map(b => 
                      new BookDetails(
                        b.id,
                        b.authors,
                        b.title,
                        b.shelf, // Shelf - Category
                        b.imageLinks)
                    )}))
    });
  }

  searchBooks = (searchString) => {
    BooksAPI.search(searchString)
    .then((books) => {
      this.setState((currentstate) => ({ 
        searchResponse: books.map(b => this.transformToBookDetails(b)
                    )}))
    });
  }
  
  transformToBookDetails = (book) => {
    return new BookDetails(
      book.id,
      book.authors,
      book.title,
      book.shelf, // Shelf - Category
      book.imageLinks
      )
  }

  onShowSearchPage = () => {
    this.setState((currentState) => ({
      showSearchPage:true
    })) 
  }

  onShowMainPage = () => {
    this.setState((currentState) => ({
      showSearchPage:false
    }))    
  }

  onChangeCurrentBookCategory = (book,e) =>{
    var newCategory = e.target.value;

    console.log("Book : "+book.id+" changed category to: "+newCategory);
    
    book.category = newCategory;

    BooksAPI.update(book,newCategory)
      .then(
          this.setState({
            key : book.id
          })
        )
  }

  onBookSearchCriteriaChanged = (e) => {
    var currentSearchValue = e.target.value;

    console.log(`Search criteria: ${currentSearchValue}`)

    if(currentSearchValue === '')
    {
      return;
    }

    BooksAPI.search(currentSearchValue,30)
      .then((books) => 
      {
        if(!!books){
          if(books.length>0){
            const searchResults = books.map((book) => {
              const existingBook = this.state.books.find((b) => b.id === book.id)
              book.shelf = !!existingBook ? existingBook.shelf : `none`
              //return book
              return this.transformToBookDetails(book)
            });
            this.setState({ searchResults })
          }  
        }
      })
  }

  render() {
    
    console.log('Books API token: '+Math.random().toString(36).substr(-8));

    return (
      <div className="app">
      <Route exact path="/" render={()=>(
        <ListBookShelfs
            books={this.state.books} 
            onShowSearchPage={this.onShowSearchPage} 
            onChangeCurrentBookCategory={this.onChangeCurrentBookCategory}
        />
      )}/>            
      <Route exact path="/search" render={()=>(
        <SearchBooks 
            books={this.state.books} 
            onShowMainPage={this.onShowMainPage} 
            searchResults={this.state.searchResults}
            onBookSearchCriteriaChanged = {this.onBookSearchCriteriaChanged}
            onChangeCurrentBookCategory = {this.onChangeCurrentBookCategory}
          />
      )}/>
      </div>
    )
  }
}

export default BooksApp