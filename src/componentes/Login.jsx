import "../styles/login.css"
import { Input, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'


function Login() {
    return (
        <div className="space">
            <div className="containerLogin">
                <h1>Log in</h1>
                <div className="data">
                    <h4>Email:</h4>
                    <Input width="300px" placeholder="user@user.com" size='md'></Input>
                    <h4>Password:</h4>
                    <Input width="300px" size='md'></Input>
                </div>
                <h5>Si no tienes cuenta registrate aqui </h5>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                    Register
                </Button>
            </div>
        </div>
    )
}
export default Login