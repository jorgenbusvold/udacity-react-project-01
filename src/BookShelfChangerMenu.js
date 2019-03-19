import React, {Component} from 'react';

class BookShelfChangerMenu extends Component
{

        printBookInfo(book, newCategory) {
                console.log("Change category to: "+book.category+", for book with id: "+book.id);
        }


        render(){
        
        const {book} = this.props;

        console.log(book.id + " " +book.category);

        return (
                <div id="bookCategoryOptions" className="book-shelf-changer">
                    {/* <select value={book.category} 
                            //onChange={(e) => this.props.onChangeCurrentBookCategory(book,e)}
                            onChange = {(e) => this.printBookInfo(book, HelperMethods.getSelectedItem(bookCategoryOptions))}
                            > */}
                 <select value={book.shelf} onChange={(event) => this.props.onChangeCurrentBookCategory(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading"
                                >Currently Reading
                        </option>
                        <option value="wantToRead"
                                >Want to Read
                        </option>
                        <option value="read"
                                >Read
                        </option>
                        <option value="None"
                                >None
                        </option>
                    </select>
                </div>
        );
    }
}

export default BookShelfChangerMenu;