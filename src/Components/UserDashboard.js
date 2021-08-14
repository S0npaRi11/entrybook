import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Header from './partials/_Header'
import AddBook from './partials/_AddBook'
import BooksList from './partials/_BooksList';

import { readAllBooks } from '../Controllers/user'
import { createOne } from '../Controllers/book'
import { deleteOne } from '../Controllers/book'

import getCookie from '../Controllers/additionals'

const Dashboard = () => {

    const [formToggle, setFormToggle] = useState(false)
    const [books, setBooks] = useState([])

    const history = useHistory()

    const token = getCookie('token');
    const userID = getCookie('entry-app-user-id');
    const userName = getCookie('entry-app-user-name');
    // console.log(token, userID, userName)

    if(token === undefined){
        history.push('/')
    }

    // use onEffect to get all the books of the user
    useEffect(() => {
        let isMounted = true
        const fetchedBooks = async () => {
           if(isMounted){
                try {
                    const allBooks = await readAllBooks(token)
                    // console.log(allBooks)
                    setBooks(allBooks.result)
                } catch(error) {
                     history.push('/500')   
                }
           }
        }
        fetchedBooks()
        return () => { isMounted = false }
    }, [books,token,history])

    // Add Book function
    const addBook = async (token, formData) => {
        const data = await createOne(token,formData)
        setBooks([...books, data.result])
    }

    // Delete book function
    const deleteBook = async (token, id) => {
        await deleteOne(token, id)
        // setBooks([...books, data.result])
        setBooks(books.filter((book) => book._id !== id))
    }


    return (
        <>
        <Header user = { userName }/>
        <Container>
           <h1 className="page-title font-weight-normal mb-3"> Books </h1>
           <Button className="btn btn-primary" onClick = { () => setFormToggle(!formToggle) }>
               Add new Book
           </Button>

           { formToggle && <AddBook  token = { token } addBook = { addBook } user = { userID }/> } 

           <BooksList books = { books } onDelete = { deleteBook } token ={ token } />
        </Container>
        </>
    )
}

export default Dashboard
