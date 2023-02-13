import '../styles/header.css';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

function Header() {
    return (
        <div className='container'>
            <div className="logo">
                <img src="https://www.logocrea.com/storage/2016/07/gato1.png" alt="" />
            </div>

            <div className="category">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='login'>login</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='signup'>sign up</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='products'>Products</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem >
                        <BreadcrumbLink href='user'>User</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='user'>
                <InfoIcon />
                <p>cart</p>
            </div>

        </div>
    )
}
export default Header