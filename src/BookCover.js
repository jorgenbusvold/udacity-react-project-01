import React, {Component} from 'react';

class BookCover extends Component
{
    render()
    {
        const {coverart} = this.props;

        // console.log(coverart);

        return(
            <div 
                className="book-cover" 
                style={{
                        width:128,
                        height:192,
                        backgroundImage:`url(${coverart.url})`
                    }}
                >
            </div>
        );
    }
}

export default BookCover;