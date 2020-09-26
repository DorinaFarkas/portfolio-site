import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Todo.css';
import { TodoContext } from './TodoContext';
import TodoDetails from './TodoDetails';

const TodoList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { tasks } = useContext(TodoContext);
    const theme = isLightTheme ? light : dark;
    return tasks.length ? (
        <div className="Todo-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {tasks.map(task => {
                    return (
                        <TodoDetails task={task} key={task.id}/>
                    )
                })}
            </ul>
        </div>) : (
            <div style={{padding:'0 0 20px 0', textAlign: "center"}}>There are no books in your list. Add some!</div>
        )
}

export default TodoList;