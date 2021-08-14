import  Container  from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Error500 = () => {
    return (
        <Container>
            <h1> Error : 500 </h1>
            <p> Error while connecting to the server </p>
            <Link to='/user'> Go back </Link>
        </Container>
    )
}

export default Error500
