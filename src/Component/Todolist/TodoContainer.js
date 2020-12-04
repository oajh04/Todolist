import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import * as S from './TodolistStyle';

const TodoContainer = ({id, check, text}) => {
    return (
        <S.Container>
            <S.Check check={check}>{check && <MdDone/>}</S.Check>
            <S.Content check={check}>{text}</S.Content>
            <S.Remove><MdDelete/></S.Remove>
        </S.Container>
    )
}

export default TodoContainer;