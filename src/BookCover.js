import React, {Component} from 'react';

class BookCover extends Component
{
    render()
    {
        const {coverart} = this.props;

        if(typeof coverart === "undefined")
        {
            console.log(`No coverart exist for current book.`)
            return null;
        }

        return(
            <div 
                className="book-cover" 
                style={{
                        // TODO: Use passed properties as values
                        // width:`${coverart.width}`,
                        // height:`${coverart.height}`,
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