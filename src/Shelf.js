import React, {Component} from 'react';
import Books from './Books';
import './App.css'

class Shelf extends Component
{
    render(){

        const { books, category } = this.props;

        return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{category}</h2>
                  <div className="bookshelf-books">
                    <Books 
                        books={books}
                        onChangeCurrentBookCategory={this.props.onChangeCurrentBookCategory}
                        />
                  </div>
                </div>
                );
    }
}

export default Shelf;