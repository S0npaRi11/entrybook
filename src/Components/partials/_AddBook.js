import { useState } from 'react';

//import { createOne } from '../../controllers/book'

const AddBook = ({ token, addBook, user }) => {

    const [bookTitle, setBookTitle] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!bookTitle){
            alert('Please give the book a title');
            return
        }

        // here, we will create a new book
        const formData = {
            creatorID: user,
            title: bookTitle,
            users: user
        }

        addBook(token, formData)
    
        // reset the input.value
        setBookTitle(''); 
    }

    return (
        <form className='addBook-form' onSubmit={ onSubmit }>
            <br />
           <input type='text' id='bookTitle' required autoFocus className='form-control' placeholder='Enter Book Title' value={ bookTitle } onChange={ (e) => setBookTitle(e.target.value)}/>
           <input type='submit' className='btn btn-primary'  value='Add Book'/>
        </form>
    )
}

export default AddBook
