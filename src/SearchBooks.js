import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBooksResult from './SearchBooksResult'

class SearchBooks extends Component
{
    render()
    {
        const {searchResults, books} = this.props;

        console.log(`Books: ${books}`);

        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link
                    to="/"
                    onClick={() => this.props.onShowMainPage()}
                    className="close-search">
                    Close
                </Link>
              {/* <a className="close-search" onClick={() => this.props.onShowMainPage()}>Close</a> */}
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                    type="text"
                    placeholder="Search by title or author"
                    onChange={(event) => this.props.onBookSearchCriteriaChanged(event)}
                    />
              </div>
            </div>
            <SearchBooksResult 
              searchResults={searchResults}
              books = {books}
              onChangeCurrentBookCategory = {this.props.onChangeCurrentBookCategory}
              />      
          </div>
        );
    }
}

export default SearchBooks;