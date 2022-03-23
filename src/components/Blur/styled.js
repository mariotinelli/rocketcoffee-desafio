import styled from 'styled-components'

export const BlurComponent = styled.img`
    width: 20.0625rem;
    height: 20.0625rem;
    z-index: -1;
    display: flex;
    position: absolute;
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    left: ${props => props.left};

    @media only screen and (max-width: 918px) {
        display: none;
    }
`;