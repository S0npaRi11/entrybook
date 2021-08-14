import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

// This will render the book card

// This will take the book as the prop
const Books = ({ book, onDelete, token }) => {

    const creationDate = new Date(book.creationDate)
    return (
        <div className="col-sm-4 book-wrapper" >
        <Card className="book-card">
            <Card.Body>
                <Card.Title className="book-title">
                  {book.title}
                </Card.Title>
                <Card.Subtitle className="book-creator">  Created At : { creationDate.toDateString() } </Card.Subtitle>
                <Card.Text className="book-info">
                    <Row>
                        <div className='col-lg-4'>
                            <p> Received </p>
                            {book.totalReceived}
                        </div>
                        <div className='col-lg-4'>
                            <p>  Dept </p>
                            {book.totalDept}
                        </div>
                        <div className='col-lg-4'>
                            <p>  Paid </p>
                            {book.totalPaid}
                        </div>
                    </Row>
                </Card.Text>
                <Card.Link className='btn btn-primary' onClick = {() => onDelete(token, book._id) }> Delete </Card.Link>
                <Link to= { `/book/${book._id}` } className='btn btn-success card-link' > More info </Link>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Books
