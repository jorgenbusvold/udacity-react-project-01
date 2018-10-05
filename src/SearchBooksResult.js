import React, {Component} from 'react'; 
import Book from './Book';

class SearchBooksResult extends Component {

    render(){
        const { searchResult } = this.props;

        var bookListItems = [];

        bookListItems = searchResult.map(b => (
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