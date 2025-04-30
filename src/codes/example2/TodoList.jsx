import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';

const TodoList = () => {
    const [text, setText] = useState('');
    const todos = useSelector(state => state.todo.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Todo List</h3>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="Add new todo" />
            <button onClick={() => {
                dispatch(addTodo(text));
                setText('');
            }}>Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
