import Row from 'react-bootstrap/Row'
import Entries from './_Entries'

const EntryList = ({ entries, token, bookID, onDelete, onUpdate }) => {
    return (
        <Row className='entry-list'>
            {entries.length === 0 ?  'No entries found' 
                :entries.map((entry) => (
                    <Entries key = { entry._id } token ={ token } bookID = { bookID } entry ={ entry } onDelete = { onDelete } onUpdate = { onUpdate }/>
                ))
            }
        </Row>
    )
}

export default EntryList
