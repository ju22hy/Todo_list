import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';

const Todo = ({ task, deleteTodo, editTodo }) => {
  console.log(task);
  return (
    <div className="flex justify-between items-center bg-slate-500 text-gray-300 py-3 px-4 rounded-md mb-1">
      <p>{task.task}</p>
      <div className="flex items-center gap-x-4">
        <CiEdit className="text-xl" onClick={() => editTodo(task.id)} />
        <TiDeleteOutline
          className="text-xl"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
