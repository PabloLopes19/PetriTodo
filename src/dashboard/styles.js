import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%; height: 100vh;
    padding: 50px 0;

    background: #16151A;
`;

export const FormTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;

    margin-bottom: 5px;
`;
export const PageDescription = styled.Text`
    font-size: 12px;
    font-weight: normal;
    color: #fff;
    opacity: .6;

    margin-bottom: 20px;
`;
export const AddTaskArea = styled.View`
    width: 100%; min-height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    padding: 0 20px;
`;
export const AddTaskInput = styled.TextInput`
    padding: 0 13px;
    width: 100%; height: 40px;
    font-size: 12px;
    color: #fff;
    background: #36343E;
    border: none;
    border-radius: 6px;
`;
export const AddTaskButton = styled.TouchableOpacity`
    width: 40px; height: 40px;
    background: #6769EA;
    color: #fff;
    font-weight: bold;
    border-radius: 6px; 

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 10px;
    transition: all .2s;
`;

export const TodosArea = styled.View`
    width: 100%; min-height: 200px;
    display: flex;
    padding: 0 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
export const TodoContainer = styled.View`
    background: #1F1E25;
    width: 80%; height: 50px;
    padding: 17px;
    border-radius: 6px;

    margin: 10px 0;
`;
// export const TodoCheck = styled.CheckBox``;
export const TodoDescription = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 12px;
`;