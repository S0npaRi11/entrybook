import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import { logIn } from '../Controllers/user'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [user, setUser] = useState('')

    const history = useHistory()


    const onSubmit = async (e) => {
        e.preventDefault()


        if(!email && !password){
            alert(' Invalid Request ')
            return
        }

        // here goes the function which will be used to log in

        const formData = {
            email: email,
            password: password
        }

        const data = await logIn(formData)

        console.log(data)
        document.cookie = `token=${data.result[0]};max-age=86400,domain=localhost:3000`
        document.cookie = `entry-app-user-id=${data.result[1]._id};max-age=86400,domain=localhost:3000`
        document.cookie = `entry-app-user-name=${data.result[1].firstName + ' '+data.result[1].lastName};max-age=86400,domain=localhost:3000`
        document.cookie = `entry-app-user-email=${data.result[1].email};max-age=86400,domain=localhost:3000`

       const receivedToken = data.result[0]

        // console.log(token)

        history.push({
            pathname: '/user',
            state: { token: receivedToken }
        })

        setEmail('')
        setPassword('')
    }

    return (
        <div className="signin-form-wrapper">
            <form onSubmit={ onSubmit } className='form-signin pt-3 pb-3'>
                <h1 className="page-title mb-3 font-weight-normal"> Sign In </h1>
                <div>
                    <label htmlFor='email'> Email </label>
                    <input type='email' id='email' required autoFocus className="form-control" placeholder='Enter Email' value={ email } onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <br />
                <div>
                    <label htmlFor='password'> Password </label>
                    <input type='password' id='password' required autoFocus className="form-control" placeholder='enter password'  value={ password } onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <br />
                <input type="submit" className='btn btn-primary btn-block' value='Log In' />
                <br />
                <p className='align-right'> Not registered? <Link to='/register'> Register here </Link> </p>
            </form>

          
        </div>

    )
}

export default Login
