import React, { useState } from 'react'
import { Button, HeaderComponent, Link, Logo, LogoMobile, MenuIcon, MenuIconClose, MenuToggle, Navbar, TextButton } from './styled';
import logoDesktop from '../../assets/logo-desktop.svg'

const links = [
    'Home',
    'Menu',
    'Recompensas',
    'Gift Cards',
    'Lojas'
]

const Header = () => {

    const [showMenuToggle, setShowMenuToggle]= useState(false)

    return (
        <>
            <HeaderComponent>
                <Logo src={logoDesktop} />
                <LogoMobile />
                <MenuToggle onClick={() => setShowMenuToggle(!showMenuToggle)}>
                    <MenuIcon showMenuToggle={showMenuToggle}/>
                    <MenuIconClose showMenuToggle={showMenuToggle}/>
                </MenuToggle>
                <Navbar showMenuToggle={showMenuToggle}>
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
}

export default Header;