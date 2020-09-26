import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoHeader = () => {
    const { tasks } = useContext(TodoContext);
    return ( <div style={{textAlign:'center'}}>
        <h2>Reading list</h2>
    <p>Currently you have { tasks.length } books to get through...</p>
    </div> );
}
 
export default TodoHeader; 