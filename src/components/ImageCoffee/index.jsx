import React from 'react'
import { ImageComponent, ImageContainer, MobileBlur } from './styled';
import img from "../../assets/rocket-coffee.png";

const Image = () => (

    <>
    <ImageContainer>
        <ImageComponent src={img}/>
        <MobileBlur bottom="0"/>
    </ImageContainer>
    </>

)

export default Image;