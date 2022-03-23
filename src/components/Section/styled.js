import styled from 'styled-components'
import {Button as HeaderButton} from '../Header/styled'

export const SectionComponent = styled.section`
    max-width: 34.25rem;
    width: 34.25rem;
    text-align: center;
    margin-top: 2.5rem;
    margin-inline: auto;

    @media only screen and (max-width: 918px) {
        margin-top: 5.5rem;
        margin-bottom: 5.5rem;
        width: 21.625rem;
        height: 24.5625rem;
    }
`;

export const GreatText = styled.h1`
    font-size: var(--font-3);
    font-weight: 700;
    color: var(--text-color);
    letter-spacing: -0.03em;

    @media only screen and (max-width: 918px) {
        font-size: var(--font-4);
    }
`;

export const GreatTextStroke = styled(GreatText)`
    color: var(--background);
    text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
        -1px 1px 0 var(--button), 1px 1px 0 var(--button);
`;

export const Button = styled(HeaderButton)`
    margin-bottom: 6.125rem;
    margin-top: 5.5rem;
    margin-inline: auto;
    display: none;

    @media only screen and (max-width: 918px) {
        display: block;
    }
`;

export const SectionText = styled.div`
    display: none;
    width: 23.3125rem;
    height: 8rem;

    @media only screen and (max-width: 918px) {
        display: block;
    }
`;

export const Text = styled.p`
    font-size: var(--font-5);
    font-weight: 700;
    color: var(--text-color);
    line-height: 41px;
    text-align: center;
    letter-spacing: 0.02em;
`;