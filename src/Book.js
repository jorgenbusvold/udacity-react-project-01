import React, {Component} from 'react';
import BookShelfChangerMenu from './BookShelfChangerMenu'

class Book extends Component
{
    render(){
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover />
                    <BookShelfChangerMenu />
                </div>
                <div className="book-title">To Kill a Mockingbird</div>
                <div className="book-authors">Harper Lee</div>
            </div>
        );
    }
}

export default Book;