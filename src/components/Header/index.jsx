import React from 'react'
import { Button, HeaderComponent, Link, Logo, Navbar, TextButton } from './styled';

const links = [
    'Home',
    'Menu',
    'Recompensas',
    'Gift Cards',
    'Lojas'
]

const Header = () => (

    <>
        <HeaderComponent>
            <Logo />
            <Navbar>
                {links.map( (link) => (
                    <Link href='#'> {link} </Link>
                ))}
            </Navbar>
            <Button>
                <TextButton> 
                    PEGAR MEU CAFÉ 
                </TextButton>
            </Button>
        </HeaderComponent>
    </>

)

export default Header;