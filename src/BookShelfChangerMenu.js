import React, {Component} from 'react';
// import Select from 'react-select';

// const options = [
//     {value:"move", label:"Move to..."},
//     {value:"Currently Reading", label:"Currently Reading"},
//     {value:"Want to Read", label:"Want to Read"},
//     {value:"Read", label:"Read"},
//     {value:"None", label:"None"},
// ];

class BookShelfChangerMenu extends Component
{
    render(){
        const {book} = this.props;

        console.log(book.id + " " +book.category);

        return (
                <div className="book-shelf-changer">
                    <select value={book.category} 
                            onChange={(e) => this.props.onChangeCurrentBookCategory(book,e)}
                            >
                        <option value="move" disabled>Move to...</option>
                        <option value="Currently Reading"
                                >Currently Reading
                        </option>
                        <option value="Want to Read"
                                >Want to Read
                        </option>
                        <option value="Read"
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