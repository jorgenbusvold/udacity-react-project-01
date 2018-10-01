import React, {Component} from 'react';
import BookCover from './BookCover';
import BookShelfChangerMenu from './BookShelfChangerMenu';

class Book extends Component
{

    render(){
        const {title, author, coverart} = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <BookCover coverart={coverart} />
                    <BookShelfChangerMenu />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    }
}

export default Book;