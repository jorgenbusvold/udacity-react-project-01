import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import ListBookShelfs from './ListBookShelfs';
import * as BooksAPI from './BooksAPI';
import {BookDetails, CoverArt} from './BookDetails';

class BooksApp extends React.Component {


  state = {
      // {
      //   id: 1,
      //   title: "To Kill a Mockingbird",
      //   author: "Harper Lee",
      //   category: "Currently Reading",
      //   coverart: {
      //     width:"128",
      //     height:"193",
      //     url:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
      //   }
      // },
      // {
      //   id: 2,
      //   title: "Ender's Game",
      //   author: "Orson Scott Card",
      //   category: "Currently Reading",
      //   coverart: {
      //     width:"128",
      //     height:"188",
      //     url:"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
      //     }
      //   },
      // {
      //   id: 3,
      //   title: "1776",
      //   author: "David McCullough",
      //   category: "Want to Read",
      //   coverart: {
      //     width:"128",
      //     height:"193",
      //     url:"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
      //   }
      // },
      // {
      //   id: 4,
      //   title: "Harry Potter and the Sorcerer's Stone",
      //   author: "J.K. Rowling",
      //   category: "Want to Read",
      //   coverart: {
      //     width:"128",
      //     height:"192",
      //     url:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
      //   }
      // },
      // {
      //   id: 5,
      //   title: "The Hobbit",
      //   author: "J.R.R. Tolkien",
      //   category: "Read",
      //   coverart: {
      //     width:"128",
      //     height:"192",
      //     url:"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
      //   }
      // },
      // {
      //   id: 6,
      //   title: "Oh, the Places You'll Go!",
      //   author: "Seuss",
      //   category: "Read",
      //   coverart: {
      //     width:"128",
      //     height:"174",
      //     url:"http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
      //   }
      // },
      // {
      //   id: 7,
      //   title: "The Adventures of Tom Sawyer",
      //   author: "Mark Twain",
      //   category: "Read",
      //   coverart: {
      //     width:"128",
      //     height:"188",
      //     url:"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
      //   }
      // },
    books : [],
    showSearchPage: false, 
    searchResult : []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState((currentstate) => ({ 
        books: books.map(b => 
                      new BookDetails(
                        b.id,
                        b.authors.map(a => a+", ".slice(0,-2)),
                        b.title,
                        b.shelf, // Shelf - Category
                        new CoverArt(
                          130,
                          190,
                          b.imageLinks.thumbnail
                        ))
                    )}))
      // .catch(
      //   error => console.log('Error: '+error)
      //   )
      });
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
    
    const items = this.state.books;

    items[book.id-1].category = newCategory;

    this.setState((currentState) => ({
        books : items
    }))
  }

  onBookSearchCriteriaChanged = (e) => {
    var currentSearchValue = e.target.value;

    var currentSearchResult = [];

    if(currentSearchValue !== "")
    {
      currentSearchResult= this.state.books.filter( (b) => b.title.startsWith(currentSearchValue));
    }

    this.setState((currentState) => ({
      searchResult : currentSearchResult
    }))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks 
              onShowMainPage={this.onShowMainPage} 
              searchResult={this.state.searchResult}
              onBookSearchCriteriaChanged = {this.onBookSearchCriteriaChanged}
          />
        ) : (
          <ListBookShelfs 
              books={this.state.books} 
              onShowSearchPage={this.onShowSearchPage} 
              onChangeCurrentBookCategory={this.onChangeCurrentBookCategory}
          />
        )}
      </div>
    )
  }
}

export default BooksApp