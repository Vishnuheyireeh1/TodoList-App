import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.text}
      </span>
      <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
