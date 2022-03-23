import styled from 'styled-components'

export const SectionComponent = styled.section`
    max-width: 34.25rem;
    width: 34.25rem;
    height: 12.75rem;
    max-height: 12.75rem;
    text-align: center;
    margin-top: 2.5rem;
    margin-inline: auto;
`;

export const GreatText = styled.h1`
    font-size: var(--font-3);
    font-weight: 700;
    color: var(--text-color);
    letter-spacing: -0.03em;
`;

export const GreatTextStroke = styled(GreatText)`
    color: var(--background);
    text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
        -1px 1px 0 var(--button), 1px 1px 0 var(--button);
`;