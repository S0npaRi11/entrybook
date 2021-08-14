import { useState } from 'react'
import Row from 'react-bootstrap/Row'

const AddEntry = ({ onAdd, bookID, token, userID }) => {

    const [entryTitle, setEntryTitle] = useState('');
    const [entryType, setEntryType] = useState('paid');
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!entryTitle && !entryType && !recipient && amount === 0 ){
            alert('Fill all the necessary fields.')
            return
        }

        const formData = {
            entryTitle: entryTitle,
            amount: amount,
            type: entryType,
            recipient: recipient,
            entryCreatorID: userID,
            bookID: bookID
        }

        // This is where we add new entry
        onAdd(bookID, token,formData)

        // reset the values
        setEntryTitle('');
        setEntryType('paid');
        setRecipient('');
        setAmount(0)
    }

    return (
        <form className='form-register' onSubmit={ onSubmit }>
            <Row>
                <div className='col-sm-6'>
                    <br />
                    <input type='text' id='entryTitle' className='form-control' value={ entryTitle } onChange={ (e) => setEntryTitle(e.target.value) } placeholder='Enter Title' required/>
                </div>
                <div className='col-sm-6'>
                    <br />
                    <input type='text' id='entryType' className='form-control' value={ entryType } onChange={ (e) => setEntryType(e.target.value) } placeholder='Enter type' required/>  
                </div>
                <div className='col-sm-6'>
                    <br />
                    <input type='text' id='recipient' className='form-control' value={ recipient } onChange={ (e) => setRecipient(e.target.value) } placeholder='Enter recipient' required/>
                </div>
                <div className='col-sm-6'>
                    <br />
                    <input type='number' id='amount' className='form-control' value={ amount } onChange={ (e) => setAmount(e.target.value) } placeholder='Enter amount' required/>
                </div>
            </Row>

            <br />
            <input type='submit' className='btn btn-primary btn-block' value='Add Entry' />
        </form>
    )
}

export default AddEntry
