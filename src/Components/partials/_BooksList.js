import Row from 'react-bootstrap/Row'
import Books from './_Books';

const BooksList = ({ books, onDelete, token }) => {

    return (
       <>
           {books.length === 0 ? 'No Books Found' :
             <Row className="book-list">
                { books.map(book => (
                    <Books key={ book._id } book = { book } onDelete={ onDelete } token = { token }/> 
                )) }
            </Row>
           }
       </>
    )
}

export default BooksList
