import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'
import logoMobile from '../../assets/logo-mobile.svg'
import openMenu from '../../assets/menu-buguer-open.svg'
import closeMenu from '../../assets/menu-buguer-close.svg'

export const HeaderComponent = styled.header`
    margin-top: 3.125rem;
    margin-inline: auto;
    max-width: 57.375rem;
    width: 57.375rem;
    max-height: 3.125rem;
    height: 3.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 918px) {
        width: 90vw;
        margin-top: 1.875rem;
    }
`;

export const Logo = styled.img`
    display: flex;  

    @media only screen and (max-width: 918px) {
        display: none;
    }
`;


export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.0269rem;

    @media only screen and (max-width: 918px) {
        display: none;
        border-top: 1px solid var(--border-menu-mobile);
        display: ${props => props.showMenuToggle === true ? "flex" : "none"};
        flex-direction: column;
        justify-content: flex-start;
        gap: 0;
        position: absolute;
        top: 6.5rem;
        left: 0;
        z-index: 100;
        background: var(--background);
        width: 100vw;
        height: 51.375rem;
    }
`;

export const Link = styled.a`
    color: var(--text-color);
    text-decoration: none;
    font-size: var(--font-1);
    font-weight: 400;
    letter-spacing: 0.02em;
    
    &:hover {
        font-weight: 800;
        color: var(--button);
    }

    @media only screen and (max-width: 918px) {
        width: 100%;
        display: flex;
        align-items: center;
        text-align: start;
        height: 3.5rem;
        padding-left: 1.875rem;
        border-bottom: 1px solid var(--border);
    }
`;

export const Button = styled.button`
    width: 10.75rem;
    height: 2.3125rem;
    border: 1px solid var(--button);
    border-radius: 0.375rem;
    text-align: center;
    background: var(--background);
    cursor: pointer;

    &:hover {
        background-color: var(--button);
    }

    @media only screen and (max-width: 918px) {
        display: none;
    }
`;

export const TextButton = styled.p`
    color: var(--text-color);
    font-size: var(--font-2);
    font-weight: 800;
`;



/// Mobile


export const LogoMobile = styled.img.attrs({src: logoMobile})`
    display: none;  

    @media only screen and (max-width: 918px) {
        display: flex;
    }
`;

export const ArrowButton = styled.img.attrs({src: arrow})``;

export const MenuToggle = styled.button`
    display: none;
    background: #FFF0;
    border: none;

    @media only screen and (max-width: 918px) {
        display: flex;
    }
`;

export const MenuIcon = styled.img.attrs({src: openMenu})`
    display: ${props => props.showMenuToggle === true ? "none" : "flex"};
`;

export const MenuIconClose = styled.img.attrs({src: closeMenu})`
    display: ${props => props.showMenuToggle === true ? "flex" : "none"};
`;
