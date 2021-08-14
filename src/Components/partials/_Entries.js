import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import UpdateEntry from './_UpdateEntry'

const Entries = ({ entry, token, bookID, onDelete, onUpdate }) => {

    const [toggleForm, setToggleForm] = useState(false);

    const toggleUpdateEntryForm = (e) => {
        e.preventDefault()
        setToggleForm(!toggleForm)
    }

    return (
        <div className='col-md-6'>
            <Card className='entry-card'>
            <Card.Body>
                <Card.Title className="entry-title">
                    { entry.entryTitle }
                </Card.Title>
                <Card.Subtitle className="entry-creator"> { entry.entryCreatorID } </Card.Subtitle>
                <Card.Text className="entry-info">
                    <p> Amount : { entry.amount } </p>
                    <p> Type : { entry.type } </p>
                    <p> Recipient : { entry.recipient } </p>
                    <p> Details : { entry.details } </p>
                </Card.Text>
                {entry.type === 'dept' && <Card.Link className='btn btn-primary' onClick={ toggleUpdateEntryForm }> Update </Card.Link>}{/* Make update entries visible only if entries are of type dept */}
                <Card.Link onClick = { () => onDelete(bookID, entry._id, token) }> Delete </Card.Link> 

                { toggleForm && <UpdateEntry  onUpdate = { onUpdate } bookID = { bookID } entry = { entry } token = { token }/> }
            </Card.Body>        
        </Card>
        </div>
    )
}

export default Entries
