import React, { useContext } from 'react';
import TodoContextProvider from '../Projects/ListApp/TodoContext';
import TodoHeader from '../Projects/ListApp/TodoHeader';
import NewTodoForm from '../Projects/ListApp/TodoForm';
import TodoList from '../Projects/ListApp/TodoList';
import { ThemeContext } from './ThemeContext';

const Todo = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <TodoContextProvider>
            <div className='Todo' style={{ background: theme.ui, color: theme.syntax}}>
                <TodoHeader />
                <TodoList />
                <NewTodoForm />
            </div>
        </TodoContextProvider>
    );
}

export default Todo;

