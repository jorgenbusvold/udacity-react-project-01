import React, {Component} from 'react';
import Book from './Book';

class Books extends Component
{
    render(){
        
        const { books } = this.props;

        var bookListItems = books.map(b => (
            <li key={b.id}>
                <Book 
                    book = {b}
                    onChangeCurrentBookCategory={this.props.onChangeCurrentBookCategory}
                />
            </li>));
        

        return(<ol className="books-grid">{bookListItems}</ol>);
    }
}

export default Books;