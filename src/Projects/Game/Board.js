import React, { useContext } from 'react';
import Square from './Square';
import { ThemeContext } from '../../_components/ThemeContext';


const Board = ({ squares, onClick }) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='board' style={{border: `1rem solid ${theme.syntax}`, background: theme.syntax}}>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    );
}

export default Board;