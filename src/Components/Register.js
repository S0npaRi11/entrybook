import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Row  from 'react-bootstrap/Row';

// importing regsiter user function
import { register } from '../Controllers/user'

const Register = () => {

    const [firstName, setFirstName] = useState('')
    const [lasttName, setLastName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();

      

        if(!firstName&& !lasttName && !mobileNumber && !email && !password){
            alert(' Please fill in the required fields. ')
            return
        }

        // here we will register the user
        const formData = {
            firstName: firstName,
            lastName: lasttName,
            mobileNumber: mobileNumber,
            email: email,
            password: password
        }

        const user = await register(formData)
        
        user.json().then(data => {
            history.push('/')
        })
    
        // set the fields to blank
        setFirstName('')
        setLastName('')
        setMobileNumber('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="register-form-wrapper">
            <form onSubmit={ onSubmit } className='form-register'>
                <h1 className="page-title mb-3 font-weight-normal"> Register </h1>
                <Row>
                    <div className="col-sm-6">
                        <br />
                        <label htmlFor='firstName'> First Name </label>
                        <input type='text' id='firstName' className='form-control' required autoFocus value={ firstName } onChange={ (e) => setFirstName(e.target.value) } placeholder='Enter your first Name'/>
                    </div>
                    <div className="col-sm-6">
                        <br />
                        <label htmlFor='lastName'> Last Name </label>
                        <input type='text' id='lasttName' className='form-control' required autoFocus value={ lasttName } onChange={ (e) => setLastName(e.target.value) } placeholder='Enter your last name'/>
                    </div>
                   
                    <div className="col-sm-12">
                        <br />
                        <label htmlFor='mobileNumber'> Mobile Number </label>
                        <input type='text' id='mobileNumber' className='form-control' required autoFocus value={ mobileNumber } onChange={ (e) => setMobileNumber(e.target.value) } placeholder='Enter your mobile number'/>
                    </div>
                  
                    <div className="col-sm-12">
                        <br />
                        <label htmlFor='email'> Email </label>
                        <input type='email' id='email' className='form-control' required autoFocus value={ email } onChange={ (e) => setEmail(e.target.value) }  placeholder='Enter your email address'/>
                    </div>
                  
                    <div className="col-sm-12">
                        < br />
                        <label htmlFor='password'> Password </label>
                        <input type='password' id='password' className='form-control' required autoFocus value={ password } onChange={ (e) => setPassword(e.target.value) } placeholder='Enter your password'/>
                    </div>
                </Row>
                <br />

                <input type='submit' className='btn btn-primary btn-block' value='register' />
                <br />

                <p> Already refistered? <Link to='/'> Login here. </Link> </p>
            </form>
        </div>
    )
}

export default Register
