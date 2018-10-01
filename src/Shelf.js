import React, {Component} from 'react';
import Books from './Books';
import './App.css'

class Shelf extends Component
{
    render(){
        return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <Books />
                </div>
                );
    }
}

export default Shelf;