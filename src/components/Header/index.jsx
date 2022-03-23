import React from 'react'
import { Button, HeaderComponent, Link, Logo, LogoMobile, MenuIcon, MenuToggle, Navbar, TextButton } from './styled';
import logoDesktop from '../../assets/logo-desktop.svg'

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
            <Logo src={logoDesktop} />
            <LogoMobile />
            <MenuToggle>
                <MenuIcon />
                {/*<MenuIconClose></MenuIconClose>*/}
            </MenuToggle>
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