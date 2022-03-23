import React from 'react'
import { HomeComponent } from './styled'

import Blur from '../components/Blur';
import Header from '../components/Header';
import Image from '../components/ImageCoffee';
import Section from '../components/Section';

import imgBlur1 from '../assets/blur-1.png'
import imgBlur2 from '../assets/blur-2.png'

const Home = () => (

    <>
        <HomeComponent>
            <Header />
            <Section />
            <Image />
            <Blur src={imgBlur1} bottom="0" left="0"/>
            <Blur src={imgBlur2} top="0" right="0"/>
        </HomeComponent>
    </>

);

export default Home;