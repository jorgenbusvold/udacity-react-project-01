import React, {Component} from 'react';
import BookCover from './BookCover';
import BookShelfChangerMenu from './BookShelfChangerMenu';

class Book extends Component
{

    render(){
        const {book} = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <BookCover 
                        coverart={book.coverart} />
                    <BookShelfChangerMenu 
                        book={book} 
                        onChangeCurrentBookCategory={this.props.onChangeCurrentBookCategory}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        );
    }
}

export default Book;