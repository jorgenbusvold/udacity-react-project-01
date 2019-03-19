import React, {Component} from 'react';
import BookCover from './BookCover';

class Book extends Component
{

    render(){
        const {book} = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <BookCover 
                        coverart={book.coverart} />
                </div>

                <div
                    // className="book-shelf-changer"
                    >
                    <select value={this.props.book.shelf} onChange={(event) => this.props.onChangeCurrentBookCategory(this.props.book, event)} >
                        <option value="return" disabled>Move to...</option>
                        <option value="none">None</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                </div>

                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        );
    }
}

export default Book;