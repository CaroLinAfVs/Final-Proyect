import '../styles/header.css';

import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    Menu, MenuList, MenuButton, MenuGroup,
    MenuItem, Button
} from '@chakra-ui/react';

import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    function logOut() {
        localStorage.removeItem("email")
        localStorage.removeItem("username")
        localStorage.removeItem("token")

        return navigate("/");
    }

    return (
        <div className='container'>
            <div className="logo">
                <img src="https://www.logocrea.com/storage/2016/07/gato1.png" alt="" />
            </div>

            <div className="category">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">
                            <BreadcrumbLink>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to="/products">
                            <BreadcrumbLink>Products</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to="/user">
                            <BreadcrumbLink>User</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to="/galeria">
                            <BreadcrumbLink>galeria</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='user'>
                {!username ? (
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/login">
                                <BreadcrumbLink>log in</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/signup">
                                <BreadcrumbLink>sign up</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                ) : (
                    <div>
                        <Menu>
                            <MenuButton as={Button} colorScheme='red'>
                                Hola {username}
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title='Profile'>
                                    <MenuItem>My Account</MenuItem>
                                    <MenuItem>Favorite</MenuItem>
                                    <MenuItem>My posts</MenuItem>
                                    <MenuItem>New posts</MenuItem>
                                    <MenuItem onClick={logOut}>Log out</MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </div>
                )}
                <Link to="/cart">
                    <FaShoppingCart />
                </Link>
            </div>

        </div>
    )
}
export default Navbar