import '../styles/signup.css';
import { Input, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  async function handleSubmbit() {
    try {
      if (!email) {
        alert('Por favor, proporcione un correo electrónico válido.');
      } else if (password.length < 5) {
        alert('La contraseña debe tener al menos 5 caracteres.');
      } else if (name === '') {
        alert('porfavor ingresa un nombre');
      } else {
        await axios.post('http://localhost:4000/signup', {
          email,
          password,
          name,
        });
      }
    } catch (error) {
      alert('Hubo un error con el registro de usuarios. Intentarlo mas tarde.');
    }
  }

  function handlePasswordStrengthChange(event) {
    const password = event.target.value;
    setPassword(password);

    if (password.length <= 5) {
      setPasswordStrength('weak');
    } else if (password.length <= 8) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  }

  return (
    <div className="signup">
      <div className="containerSignup">
        <h1>Sign up</h1>
        <div className="data">
          <h4>Name:</h4>
          <Input
            width="300px"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="md"
          ></Input>
          <h4>Email:</h4>
          <Input
            width="300px"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="user@user.com"
            size="md"
          ></Input>
          <h4>Password:</h4>
          <p>(5 caracteres minimo)</p>
          <Input
            width="300px"
            value={password}
            onChange={handlePasswordStrengthChange}
            type="password"
            size="md"
          ></Input>
          <div
            style={{
              height: '6px',
              width: '300px',
              marginTop: '8px',
              borderRadius: '5px',
              backgroundColor:
                passwordStrength === 'weak'
                  ? 'red'
                  : passwordStrength === 'medium'
                  ? 'yellow'
                  : 'green',
            }}
          ></div>
          {passwordStrength === 'weak' ? (
            <span style={{ color: 'red' }}>Weak</span>
          ) : null}
          {passwordStrength === 'medium' ? (
            <span style={{ color: 'yellow' }}>Medium</span>
          ) : null}
          {passwordStrength === 'strong' ? (
            <span style={{ color: 'green' }}>Strong</span>
          ) : null}
          <br />
        </div>
        <Button
          onClick={handleSubmbit}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Register
        </Button>
        <h5>Si ya tienes cuenta presiona aqui </h5>
        <Link to="/login">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Log in
          </Button>
        </Link>
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
export default Signup;
