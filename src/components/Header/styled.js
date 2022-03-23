import styled from 'styled-components'

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
`;

export const Logo = styled.div`
    color: white;
    width: 10.6875rem;
    height: 2.0488rem;
    background: url("../../assets/logo-desktop.svg") no-repeat;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.0269rem;
`;

export const Link = styled.a`
    color: var(--text-color);
    text-decoration: none;
    font-size: var(--font-1);
    font-weight: 400;
    letter-spacing: 0.02em;
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
`;

export const TextButton = styled.p`
    color: var(--text-color);
    font-size: var(--font-2);
    font-weight: 800;
`;