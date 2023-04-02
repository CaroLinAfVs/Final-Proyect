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
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const { shoppingCart } = useData();

  function logOut() {
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('token');

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
        {!username ? (
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
                Hola {username}
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <Link to="/my-information">
                    <MenuItem>My Account</MenuItem>
                  </Link>
                  <Link to="/favorites">
                    <MenuItem>Favorite</MenuItem>
                  </Link>
                  <Link to="/my-posts">
                    <MenuItem>My posts</MenuItem>
                  </Link>
                  <Link to="/create-product">
                    <MenuItem>Create product</MenuItem>
                  </Link>
                  <MenuItem onClick={logOut}>Log out</MenuItem>
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
