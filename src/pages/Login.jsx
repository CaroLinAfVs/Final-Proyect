import '../styles/login.css';
import { Input, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useData } from '../Context/Context';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { setUser } = useData();

  async function handleSubmbit() {
    try {
      if (!email) {
        alert('Por favor, proporcione un correo electrónico válido.');
      } else if (password.length < 5) {
        alert('La contraseña debe tener al menos 5 caracteres.');
      } else {
        const { data } = await axios.post('http://localhost:4000/login', {
          email,
          password,
        });

        setUser({
          token: data.token,
          email: data.usuario.email,
          nombre: data.usuario.nombre,
        });

        return navigate('/');
      }
    } catch (error) {
      alert('Hubo un error con los datos entregados. Vuelve a intentarlo.');
    }
  }
  return (
    <div className="space">
      <div className="containerLogin">
        <h1>Log in</h1>
        <div className="data">
          <h4>Email:</h4>
          <Input
            type="email"
            width="300px"
            placeholder="user@user.com"
            size="md"
            onChange={(event) => setEmail(event.target.value)}
          ></Input>
          <h4>Password:</h4>
          <Input
            type="password"
            width="300px"
            size="md"
            onChange={(event) => setPassword(event.target.value)}
          ></Input>
        </div>
        <Button
          onClick={handleSubmbit}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Log in
        </Button>
        <div className="footerButton">
          <h5>Si no tienes cuenta registrate aqui </h5>
          <Link to="/signup">
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
            >
              Register
            </Button>
          </Link>
        </div>
        <Link to="/">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Go back
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Login;
