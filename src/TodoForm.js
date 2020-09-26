import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';
import { ThemeContext } from './ThemeContext';

const NewTodoForm = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { dispatch } = useContext(TodoContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO', task:
                {title, author}
        });
        setTitle('');
        setAuthor('');
    }
    return (
        <form style={{ background: theme.bg }} onSubmit={handleSubmit}>
            <input style={{ color: theme.syntax, background: theme.ui }} type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input style={{ color: theme.syntax, background: theme.ui }} type='text' placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input style={{ color: theme.syntax, background: theme.ui }} type='submit' value='Add' />
        </form>
    );
}

export default NewTodoForm;