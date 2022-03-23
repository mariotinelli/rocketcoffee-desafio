import React from 'react'
import { BlurComponent } from './styled';

const Blur = ({src, top, bottom, right, left}) => (

    <>
        <BlurComponent src={src} top={top} bottom={bottom} right={right} left={left}/>
    </>

); 
export default Blur;