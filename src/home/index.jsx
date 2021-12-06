import React, { useState } from 'react';
import { Image } from 'react-native';

import { Container, LogoArea, FormArea, FormTitle, FormDescription, NameInput, BtnStart, BtnText } from './styles';

const home = ({ navigation }) => {
    const [nome, setNome] = useState('');

    function goToPage(){
        navigation.navigate('Dashboard', {
            nome,
        })
    }

    return (
        <Container>
            <LogoArea className="LogoArea">
                <Image style={{height: 222, width: 173}} className="Logo" source={require('../../assets/Logo.png')}/>
            </LogoArea>

            <FormArea>
                <FormTitle>Olá, seja bem vindo!</FormTitle>
                <FormDescription>Digite o seu nome para que possamos começar</FormDescription>

                <NameInput onChangeText={nome => setNome(nome)} placeholder="Digite seu nome" />

                <BtnStart style={ nome === '' ? {opacity: '0.4'} : {opacity: 1}} disabled={nome === ''}  onPress={goToPage}>
                    <BtnText>Vamos lá!</BtnText>
                </BtnStart>
            </FormArea>
        </Container>
    );
}

export default home;