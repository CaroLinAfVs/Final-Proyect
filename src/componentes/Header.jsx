import '../styles/header.css';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='container'>
            <div className="logo">
                <img src="https://www.logocrea.com/storage/2016/07/gato1.png" alt="" />
            </div>

            <div className="category">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>
                            <BreadcrumbLink >Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <Link to='products'>
                        <BreadcrumbLink >Products</BreadcrumbLink>
                    </Link>

                    <BreadcrumbItem >
                        <Link to='user'>
                        <BreadcrumbLink >User</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='user'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/login'>log in</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='signup'>sign up</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Link to="/cart">
                    <FaShoppingCart />
                </Link>
            </div>

        </div>
    )
}
export default Header