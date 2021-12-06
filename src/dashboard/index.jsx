import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { Container, Title, LogoArea, FormArea, FormTitle, FormDescription, NameInput, BtnStart, BtnText } from './styles';
import Logo from '../../assets/Logo.png'

const Dashboard = ({ route  }) => {

    return (
        <Container>
            <FormTitle>Olá, {route.params?.nome}</FormTitle>
        </Container>
    );
}

export default Dashboard;