import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import '../../_styleSheets/Todo.css';
import { ThemeContext } from '../../_components/ThemeContext';

const TodoDetails = ({ task }) => {
    const { dispatch } = useContext(TodoContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <li style={{background: theme.ui, color: theme.syntax}} onClick={() => dispatch({type: 'REMOVE_TODO', id: task.id})}>
            <h4>{task.title}</h4>
            <h5>{task.author}</h5>
        </li>
    );
}

export default TodoDetails;