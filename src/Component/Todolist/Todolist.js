import React, {useState} from 'react';
import * as S from './TodolistStyle';
import TodoContent from './TodoContent';
import { TodoProvider } from './TodoModul';

const Todolist = () => {
    const [ todoText, setTodoText ] = useState(null);
    
    const textData = (e) => {
        setTodoText(e.target.value);
    }

    return(
        <TodoProvider>
            <S.TodoListBox>
                <S.TodoList>
                    {/* TodoList 날짜, 할일 표시 */}
                    <S.TodoHeader>
                        오늘 할 일은? 3개!
                    </S.TodoHeader>

                    {/* TodoList 할일 리스트*/}
                    <S.TodoBody>
                        <TodoContent/>
                    </S.TodoBody>

                    {/* TodoList 할일 등록 */}
                    <S.TodoFooter>
                        <S.TodoFooterSub>
                            <S.FooterInput placeholder="추가할 일정을 입력해주세요" onChange={textData}/>
                            <S.FooterButton>추가하기</S.FooterButton>
                        </S.TodoFooterSub>
                    </S.TodoFooter>
                </S.TodoList>
            </S.TodoListBox>
        </TodoProvider>
    )
}

export default Todolist;