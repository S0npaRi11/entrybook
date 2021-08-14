// contains all the fetch methods for entry

const URL = 'https://entry-book.herokuapp.com';

// read all entries
const readAllEntries = async (bookID,token) => {
    // const id = typeof(bookID) === 'string' ? bookID : bookID.toString()
    const data = await fetch(URL+'/entry/'+bookID,{
        headers:{
            'auth-token':token
        }
    })

    return data.json()
}

export const readAll = readAllEntries

// read an antry
const readOneEntry = async (bookID,entryID,token) => {
    // const bid = typeof(bookID) === 'string' ? bookID : bookID.toString()
    // const eid = typeof(entryID) === 'string' ? entryID : entryID.toString()
    const data = await fetch(URL+'/entry/'+bookID+'/'+entryID,{
        headers:{
            'auth-token':token
        }
    })

    return data.json()
}

export const readOne = readOneEntry

// create an entry
const createOneEntry = async (bookID,token,formData) => {
    // const id = typeof(bookID) === 'string' ? bookID : bookID.toString()
    const data = await fetch(URL+'/entry/'+bookID,{
        method: 'POST',
        headers:{
            // 'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'auth-token':token
        },
        body: JSON.stringify(formData)
    })

    return data.json()
}

export const createOne = createOneEntry

// update an entry
const updateOneEntry = async (bookID,entryID,token, formData) => {
    // const bid = typeof(bookID) === 'string' ? bookID : bookID.toString()
    // const eid = typeof(entryID) === 'string' ? entryID : entryID.toString()
    const data = await fetch(URL+'/entry/'+bookID+'/'+entryID,{
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json',
            'auth-token':token
        },
        body: JSON.stringify(formData)
    })

    return data.json()
}

export const updateOne = updateOneEntry

// delete an antry
const deleteOneEntry = async (bookID,entryID,token) => {
    // const bid = typeof(bookID) === 'string' ? bookID : bookID.toString()
    // const eid = typeof(entryID) === 'string' ? entryID : entryID.toString()
    const data = await fetch(URL+'/entry/'+bookID+'/'+entryID,{
        method: 'DELETE',
        headers:{
            'auth-token':token
        }
    })

    return data.json()
}

export const deleteOne = deleteOneEntry

// default export object
const entry = {
    readAll: readAllEntries,
    readOne: readOneEntry,
    createOne: createOneEntry,
    updateOne: updateOneEntry,
    deleteOne: deleteOneEntry
}

export default entry