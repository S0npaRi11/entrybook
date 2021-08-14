import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Header from './partials/_Header'
import Container from 'react-bootstrap/Container'
import EntryList from './partials/_EntryList'
import AddEntry from './partials/_AddEntry'

import { readOne } from '../Controllers/book'
import { createOne, deleteOne, updateOne } from '../Controllers/entry'
import getCookie from '../Controllers/additionals'

const BookDashboard = () => {

    // first, find the book with bookID

    // then set the book tasks to tasks

    const [toggleForm, setToggleForm] = useState(false)
    const [entries, setEntries] = useState([])
    const [bookTitle, setBookTitle] = useState('')

    const history = useHistory()

    const { bookID } = useParams()

    // console.log(bookID)

    // let book;

    const token = getCookie('token');
    const userID = getCookie('entry-app-user-id');
    const userName = getCookie('entry-app-user-name');
    // console.log(user)

    if(token === undefined){
        history.push('/')
    }

    useEffect(() => {
        const requiredBook = async () => {
           try {
                const book = await readOne(token, bookID)
                if(book.result !== null){
                    setBookTitle(book.result.title)
                    setEntries(book.result.entries)
                }else{
                    history.push('/500')
                }
           } catch (error) {
               history.push('/500')
           }
        }

        requiredBook()
    }, [entries, token, bookID, history])

    // add entry function
    const addEntry = async (bookID, token, formData) => {
        const newAddedEntries = await createOne(bookID, token, formData)
        setEntries([...entries,newAddedEntries.result.entries])   
    }

    // delete entry function
    const deleteEntry = async(bookID, entryID, token) => {
        await deleteOne(bookID, entryID,token)
        setEntries(entries.filter((entry) => entry._id !== entryID))
    }

    // update entry function
    const updateEntry = async(bookID, entryID, token, formData) => {
        const data = await updateOne(bookID, entryID, token, formData)
        console.log(data)
    }

    return (
        <>
            <Header  user = { userName }/>
            <Container>
                <h1 className='page-title font-weight-normal pb-3'> { bookTitle } </h1>

                <h3 className='page-title font-weight-normal pb-3'> Entries </h3>

                <button className='btn btn-primary' onClick={ () => setToggleForm(!toggleForm) }>
                    Add New Entry
                </button>

                { toggleForm && <AddEntry  onAdd = { addEntry } bookID = { bookID } token = { token } userID = { userID }/> }

                <EntryList entries = { entries } token = { token } bookID = { bookID } onDelete = { deleteEntry } onUpdate = { updateEntry }/>


            </Container>

        </>
    )
}

export default BookDashboard
