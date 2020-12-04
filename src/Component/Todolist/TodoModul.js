import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    check: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    check: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    check: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    check: false
  }
];

const todoReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
        return state.concat(action.todo);
    case 'CHECK_TODO':
        return state.map(todo=>
            todo.id === action.id ? {...todo, check: !todo.check} : todo);
    case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.id);
    case 'CHANGE_TODO':
        return state.map(todo=>
            todo.id === action.id ? todo.text = action.text : todo);
    default:
        return null;  
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const id = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIdContext.Provider value={id}>
          {children}
        </TodoIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

/* 
커스텀 hook 사용성이 편하게 하기 위해
이거 안하면 나중에 쓸때
const state = useContext(TodoStateContext); 를 다 써야함

하면
const state = useTodoState(); 로 간결하게 가능
*/
export const useTodoState = () => {
  return useContext(TodoStateContext);
}

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
}

export const useTodoId = () => {
  return useContext(TodoIdContext);
}