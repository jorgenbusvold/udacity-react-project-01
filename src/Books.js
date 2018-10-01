import React, {Component} from 'react';
import Book from './Book';

class Books extends Component
{
    render(){
        
        const { books } = this.props;

        var bookListItems = books.map(b => (
            <li key={b.id}>
                <Book 
                    title={b.title} 
                    author={b.author} 
                    coverart={b.coverart}
                />
            </li>));
        

        return(<ol className="books-grid">{bookListItems}</ol>);
    }
}

export default Books;