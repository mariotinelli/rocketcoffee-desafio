import styled from 'styled-components'
import mobileBlur from '../../assets/blur-mobile.png'
import { BlurComponent } from '../Blur/styled'


export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 918px) {
        position: relative;
        width: 100vw;
    }
`;

export const ImageComponent = styled.img`
    position: absolute;
    bottom: 0;

    @media only screen and (max-width: 918px) {
        position: static;
        width: 100vw;
    }
`;

export const MobileBlur = styled(BlurComponent).attrs({src: mobileBlur})`
    display: none;
    height: 100%;
    width: 100%;

    @media only screen and (max-width: 918px) {
        display: flex;
    }
`;