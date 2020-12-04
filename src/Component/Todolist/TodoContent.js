import React from 'react';
import TodoContainer from './TodoContainer';
import { useTodoState } from './TodoModul';

const TodoContent = () => {
    const todos = useTodoState();
    console.log(todos);

    return(
        <>

            <TodoContainer text="프로젝트 생성" check={true}/>
        </>
    )
}

export default TodoContent;