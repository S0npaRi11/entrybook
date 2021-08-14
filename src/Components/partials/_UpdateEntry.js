import { useState } from 'react'

const UpdateEntry = ({ onUpdate, bookID, entry, token }) => {

    const [entryValue, setEntryValue] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if(entryValue <= 0){
            alert('Please enter value.')
            return
        }

        // here we will update the entry value
        const formData = entry
        formData.amount = entryValue

        const data = onUpdate(bookID, entry._id, token, formData)
        console.log(data)
        // reset the field
        setEntryValue(0);
    }

    return (
        <form onSubmit = { onSubmit } className='form-update-entry'>
            <br />
            <input type='number' className='form-control' id='updateEntryVal' value={ entryValue } onChange={ (e) => setEntryValue(e.target.value) } placeholder='Enter Updated value'/>
            <input type='submit' value='Update Entry' className='btn btn-primary' />
        </form>
    )
}

export default UpdateEntry
