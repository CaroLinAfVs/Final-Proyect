import "../styles/login.css"
import { Input, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import userFake from "../mocks/user.json";



function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    function handleSubmbit() {
        let passwordValue = password || "";

        if (!email) {
            alert("Por favor, proporcione un correo electrónico válido.");
        } else if (passwordValue.length < 10) {
            alert("La contraseña debe tener al menos 10 caracteres.");
        } else {
            localStorage.setItem("token", userFake.token);
            localStorage.setItem("email", email);
            localStorage.setItem("username", userFake.username);
      
            return navigate("/");
          }
    }
    return (

        <div className="space">
            <div className="containerLogin">
                <h1>Log in</h1>
                <div className="data">
                    <h4>Email:</h4>
                    <Input width="300px" placeholder="user@user.com"
                        size='md' onChange={(event) => setEmail(event.target.value)}>
                    </Input>
                    <h4>Password:</h4>
                    <Input type="password" width="300px" size='md'
                        onChange={(event) => setPassword(event.target.value)}>
                    </Input>
                </div>
                <Button onClick={handleSubmbit} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                    Log in
                </Button>
                <h5>Si no tienes cuenta registrate aqui </h5>
                <Link to="/signup">
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                        Register
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default Login