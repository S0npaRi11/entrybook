import { useState } from 'react'

const UpdateUser = ({ onUpdate, userID, token }) => {

    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!password){
            alert('Please enter password.')
            return
        }

        // here we update password
        const formData = {
            password: password
        }

        onUpdate(userID, token, formData)

        //for now, console,log the password
        console.log(password);

        //reset the fields
        setPassword('')
    }

    return (
        <form onSubmit = {onSubmit} >
            <br />
            <input type='password' className='form-control' value={password} onChange = { (e) => setPassword(e.target.value) } placeholder='Enter New Password'/>
            <input type='submit' className='btn btn-primary' value='Update Password'/>
        </form>
    )
}

export default UpdateUser
