import "../styles/signup.css"
import { Input, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function Signup() {
    return (
        <div className="signup">
            <div className="containerSignup">
                <h1>Sign up</h1>
                <div className="data">
                    <h4>Name:</h4>
                    <Input width="300px" size='md'></Input>
                    <h4>Email:</h4>
                    <Input width="300px" placeholder="user@user.com" size='md'></Input>
                    <h4>Password:</h4>
                    <Input width="300px" size='md'></Input>
                </div>
                <h5>Si ya tienes cuenta presiona aqui </h5>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                    Log in
                </Button>
            </div>
        </div>
    )
}
export default Signup