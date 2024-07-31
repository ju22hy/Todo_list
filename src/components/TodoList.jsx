// rafce : 리액트 기본 구조 불러오기
import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
uuidv4();

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([...todoValue, { id: uuidv4(), task: todo, isEdit: false }]); //todoValue 빈 배열에 todo를 합산하여 새로운 배열 생성
  };

  const deleteTodo = (id) => {
    // console.log(id);
    setTodoValue(todoValue.filter((todo) => todo.id !== id)); //todoValue 배열에서 id가 일치하지 않는 것만 필터링하여 새로운 배열 생성
  };

  // console.log(todoValue);

  const editTodo = (id) => {
    // console.log(id);
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    ); // todoBalue 배열에서 id가 일치하는 것만 찾아내서 isEdit 불리언 값을 반대로 변경
  };

  const editTask = (editValue, id) => {
    console.log(editValue, id);
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id
          ? { ...todo, task: editValue, isEdit: !todo.isEdit }
          : todo
      )
    );
  };

  return (
    <div className="container">
      <Form createTodo={createTodo} />

      {todoValue.map((todo, idx) =>
        todo.isEdit ? (
          <Edit key={idx} editTask={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
