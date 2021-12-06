import React, { useState, useEffect } from 'react';

import { Container, FormTitle, PageDescription, AddTaskArea, AddTaskInput, AddTaskButton, TodoContainer, TodoDescription } from './styles';

import { Plus } from 'react-native-feather';

const Data = [
    // {id: 1, txt: 'Todo example', isChecked: true},
    // {id: 2, txt: 'Jogo do matrix', isChecked: false},
    // {id: 3, txt: 'Metaverso', isChecked: false},
    // {id: 4, txt: 'Holy shit', isChecked: false},
]

const Dashboard = ({ route  }) => {
    const [task, setTask] = useState('');
    const [userTasks, setUserTasks] = useState([]);

    useEffect(() => {
        setUserTasks(Data);
    }, [task]);

    function AddTask() {
        const TaskObj = {
            id: Data.length + 1,
            txt: task,
            isChecked: false,
        }

        Data.push(TaskObj);
        setUserTasks(Data);
        setTask('');

        console.log(userTasks);
        console.log(userTasks.length);
    }

    return (
        <Container>
            <FormTitle>Olá, {route.params?.nome}</FormTitle>
            <PageDescription>Aqui estão as suas tarefas hoje</PageDescription>

            <AddTaskArea>
                <AddTaskInput value={task} onChangeText={e => setTask(e)} placeholder="Digite aqui a sua nova tarefa"/>

                <AddTaskButton onPress={AddTask} style={ task === '' ? {opacity: '0.4'} : {opacity: 1}} disabled={task === ''}>
                    <Plus fill="#fff" width={25} height={25} />
                </AddTaskButton>
            </AddTaskArea>


            {
                userTasks.map(Task => (
                    <TodoContainer key={Task.id}>
                        <TodoDescription>{Task.txt}</TodoDescription>
                    </TodoContainer>
                ))
            }
        </Container>
    );
}

export default Dashboard;