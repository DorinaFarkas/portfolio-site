import React, { useContext } from 'react';
import TodoContextProvider from './TodoContext';
import TodoHeader from './TodoHeader';
import NewTodoForm from './TodoForm';
import TodoList from './TodoList';
import { ThemeContext } from './ThemeContext';

const Todo = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <TodoContextProvider>
            <div style={{ background: theme.ui, color: theme.syntax, padding: '1em 6em 2em', margin: '20px' }}>
                <TodoHeader />
                <TodoList />
                <NewTodoForm />
            </div>
        </TodoContextProvider>
    );
}

export default Todo;

