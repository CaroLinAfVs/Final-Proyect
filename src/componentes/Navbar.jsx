import '../styles/navbar.css';

import {
  Menu,
  MenuList,
  MenuButton,
  MenuGroup,
  MenuItem,
  Button,
  Tag,
  Text,
  Box,
} from '@chakra-ui/react';

import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useData } from '../Context/Context';

function Navbar() {
  const navigate = useNavigate();

  const { shoppingCart, user, setUser } = useData();

  function logOut() {
    setUser({});
    return navigate('/');
  }

  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://img.freepik.com/iconos-gratis/gato-negro_318-837948.jpg"
          alt=""
        />
      </div>

      <div className="category">
        <Link to="/">
          <Button>Home</Button>
        </Link>

        <Link to="/products">
          <Button>Products</Button>
        </Link>
      </div>

      <div className="user">
        {!user.nombre ? (
          <div>
            <Link to="/login">
              <Button marginRight="5px" colorScheme="blue">
                log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="blue">sign up</Button>
            </Link>
          </div>
        ) : (
          <div>
            <Menu>
              <MenuButton as={Button} colorScheme="red">
                Hola {user.nombre}
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <Link to="/my-information">
                    <MenuItem>Mi cuenta</MenuItem>
                  </Link>
                  <Link to="/favorites">
                    <MenuItem>Favoritos</MenuItem>
                  </Link>
                  <Link to="/my-products">
                    <MenuItem>Mis productos</MenuItem>
                  </Link>
                  <Link to="/create-product">
                    <MenuItem>Crear producto</MenuItem>
                  </Link>
                  <MenuItem onClick={logOut}>Cerrar sesión</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </div>
        )}
        <Link to="/cart">
          <Tag size={'lg'} variant="solid" colorScheme="teal">
            <FaShoppingCart />
            <Box px={2}>
              <Text fontSize="lg">{shoppingCart.length}</Text>
            </Box>
          </Tag>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
