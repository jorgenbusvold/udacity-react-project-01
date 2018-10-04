import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

class ListBookShelfs extends Component
{
    render()
    {
        const {books} = this.props;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf  books={books.filter(b => b.category === 'Currently Reading')}
                                category="Currently Reading"
                                onChangeCurrentBookCategory={this.props.onChangeCurrentBookCategory}
                                />
                        <Shelf  books={books.filter(b => b.category === 'Want to Read')} 
                                category="Want to Read"
                                onChangeCurrentBookCategory={this.props.onChangeCurrentBookCategory}
                                />
                        <Shelf  books={books.filter(b => b.category === 'Read')} 
                                category="Read"
                                onChangeCurrentBookCategory={this.props.onChangeCurrentBookCategory}
                                />
                    </div>
                </div>
                <div className="open-search">
                    <Link 
                        to='/search'
                        onClick={() => this.props.onShowSearchPage()}
                        >
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

export default ListBookShelfs;