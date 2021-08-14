import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import MessagesList from './partials/_MessagesList'
import SendMessageForm from './partials/_SendMessageForm'
import Header from './partials/_Header'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { readAllMessages,sendOneMessage, deleteOneMessage } from '../Controllers/user'
import getCookie from '../Controllers/additionals'

const Messages = () => {

    const [messageFormToggle, setMessageFormToggle] = useState(false);
    const [messages, setMessages] = useState([]);

    const token = getCookie('token')
    // const userID = getCookie('entry-app-user-id');
    const userName = getCookie('entry-app-user-name');

    const history = useHistory()

    useEffect(() => {
        const getMessages = async() => {
            try {
                const data = await readAllMessages(token)
                if(data.result !== null){
                    setMessages(data.result)
                }else{
                    history.push('/500')
                }
            } catch (error) {
                history.push('/500')
            }
        }

        getMessages()
    },[token, history])

    // send message function
    const sendMessage = async(token, receiverID, formData) => {
        await sendOneMessage(token,receiverID,formData)
    }

    // delete message function
    const deleteMessages = async(token, messageID) => {
        await deleteOneMessage(token,messageID)
    }

    return (
        <>
            <Header  user = { userName }/>
            <Container>
            <h1> Messages </h1>

                <MessagesList messages = { messages } onDelete = { deleteMessages } token = { token }/>
                <Button varient='primary' onClick={ () => setMessageFormToggle(!messageFormToggle) }> Send Message </Button>

                { messageFormToggle && <SendMessageForm  onAdd = { sendMessage } token = { token }/> }
            </Container>
        </>
    )
}

export default Messages