import React from 'react'
import { ArrowButton, TextButton } from '../Header/styled';
import { Button, SectionText, Text } from './styled'
import { SectionComponent, GreatText, GreatTextStroke } from './styled';

const Section = () => (

    <>
        <SectionComponent>
            <SectionText>
                <Text> 
                    O café que fará seu código decolar para o próximo nível.
                </Text>
            </SectionText>
            <Button>
                <TextButton> 
                    PEGAR MEU CAFÉ
                </TextButton>
                <ArrowButton />
            </Button>
            <GreatText> Great Coffee </GreatText>
            <GreatTextStroke> {"<"}Great Code{"/>"} </GreatTextStroke>
        </SectionComponent>
    </>

)

export default Section;