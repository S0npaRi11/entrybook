import Card from 'react-bootstrap/Card'

const Message = ({ message,token, onDelete }) => {
    return (
        <div className='col-md-6'>
            <Card>
            <Card.Body>
                <Card.Title className='message-text'>
                   { message.meg }
                </Card.Title>
                <Card.Subtitle className='message-sender'>
                    { message.senderFirstName + ' ' +  message.senderLastName }
                </Card.Subtitle>
                <Card.Link onClick ={ () =>  onDelete(token, message._id)}> Delete </Card.Link>
            </Card.Body>    
        </Card>
        </div>
    )
}

export default Message
