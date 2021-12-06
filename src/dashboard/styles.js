import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%; height: 100vh;
    padding: 50px 0;

    background: #16151A;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const LogoArea = styled.View`
    width: 100%; padding: 20px 0;
    display: flex;
    align-items: center;
`;

export const FormArea = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;

    margin-bottom: 5px;
`;
export const FormDescription = styled.Text`
    font-size: 12px;
    font-weight: normal;
    color: #fff;
    opacity: .6;

    margin-bottom: 20px;
`;
export const NameInput = styled.TextInput`
    padding: 0 13px;
    width: 100%; height: 40px;
    font-size: 12px;
    color: #fff;
    background: #36343E;
    border: none;
    border-radius: 6px;

    margin-bottom: 20px;
`;
export const BtnStart = styled.TouchableOpacity`
    width: 300px; height: 43px;
    background: #6769EA;
    color: #fff;
    font-weight: bold;
    border-radius: 3px; 

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BtnText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
`;