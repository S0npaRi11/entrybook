import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './partials/_Header'
import UpdateUser from './partials/_UpdateUser'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { readOne, updateOne } from '../Controllers/user'
import getCookie from '../Controllers/additionals'

const Profile = () => {

    const [toggleForm, setToggleForm] = useState(false);
    const [email, setEmail] = useState('')
    const [MNO, setMNO] = useState('')
   
    const token = getCookie('token');
    const userID = getCookie('entry-app-user-id');
    const userName = getCookie('entry-app-user-name');

    const history = useHistory()

    useEffect(() => {
        const readLoggedInUser = async () => {
           try {
                const data = await readOne(userID, token) 
                if(data.result !== null){
                    setEmail(data.result.email)
                    setMNO(data.result.mobileNumber)
                }else{
                    history.push('/500')
                }
           } catch (error) {
               history.push('/500')
           }
        }

        readLoggedInUser()
    },[userID, token,history])

    // update user password
    const updatePass = async (userID, token, formData) => {
        await updateOne(userID, token, formData)
    }

    return (
        <>
            <Header  user = { userName }/>
            <Container>
                <h1> { userName } </h1>
                <h3> { email } </h3>
                <h3> { MNO } </h3>

                <Button varient='primary' onClick = { () => setToggleForm(!toggleForm) }>
                    Update Password
                </Button>

                { toggleForm && <UpdateUser  onUpdate = { updatePass } userID = { userID } token = { token }/> }

            </Container>
        </>  
    )
}

export default Profile
