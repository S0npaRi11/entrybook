import { useState } from 'react'

const SendMessageForm = ({ onAdd, token }) => {

    const [idValue, setIdValue] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {

        e.preventDefault()

        if(!idValue || !message){
            alert('Please fill in the required fields')
            return
        }

        // here we will send the message
        const formData = {
            msg: message
        }

        onAdd(token ,idValue, formData)

        // for now, console.log the id and the message
        console.log('id ', idValue)
        console.log('message ', message)

        //reset the fields
        setIdValue('')
        setMessage('')
    }

    return (
        <form onSubmit={ onSubmit }>
            {/* Recipient's ID (for now, will be chaged to email later) */}
            <br />
            <input type='text' className='form-control' id='recipient-id' value={ idValue } onChange={ (e) => setIdValue(e.target.value ) } placeholder=' Please enter the id.'/>

            {/* Message */}
            <input type='text' className='form-control' id='recipient-id' value={ message } onChange={ (e) => setMessage(e.target.value ) } placeholder=' Please enter the message.'/>

            <input type='submit' className='btn btn-primary' value='Send Message'/>


            {/* Other values will be filled with logged in values */}
        </form>
    )
}

export default SendMessageForm
