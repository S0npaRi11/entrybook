import Row from 'react-bootstrap/Row'
import Message from './_Message'

const _MessagesList = ({ messages, token, onDelete }) => {
    return (
        <Row>
            {messages.length === 0 ? 'No messages found' : 
                messages.map((message) => (
                    <Message key = { message._id } message = { message } token = { token } onDelete = { onDelete }/>
                ))
            }
        </Row>
    )
}

export default _MessagesList
