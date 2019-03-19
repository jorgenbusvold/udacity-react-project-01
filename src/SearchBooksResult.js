import React, {Component} from 'react'; 
import Book from './Book';

class SearchBooksResult extends Component {

    render(){
        const { searchResults, books } = this.props;

        console.log(`searchResult: ${searchResults}`);

        console.log(`books: ${books}`);

        var bookListItems = [];

        bookListItems = searchResults.map(b => (
        <li key={b.id}>
            <Book 
                book = {b}
                onChangeCurrentBookCategory={this.props.onChangeCurrentBookCategory}
            />
        </li>));
        

        console.log("Current books should be visible: "+bookListItems);

        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {bookListItems}
                </ol>
          </div>
        );
    }

}


export default SearchBooksResult;