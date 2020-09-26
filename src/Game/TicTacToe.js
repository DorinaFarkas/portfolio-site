import React, { useEffect, useState } from 'react';
import Board from './Board.js';
import './TicTacToe.css'

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
const TicTacToe = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? 'X' : 'O';

    useEffect((winner, xIsNext) => {
        if (winner) {
            console.log(`you win ${xIsNext ? 'O' : 'X'}`)
        }
    }, [stepNumber])


    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squers = [...current];
        if (winner || squers[i]) {
            return
        };
        squers[i] = xO;
        setHistory([...historyPoint, squers]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    }
    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0)
    }
    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })


    return (
        <>
            <div className='TicTacToe-board-wrapper'>
                <Board squares={history[stepNumber]} onClick={handleClick} />
            </div>
            <div className="info-wrapper">
                <h3>History</h3>
                <ul>
                    {renderMoves()}
                </ul>
            </div>
        </>
    );
}

export default TicTacToe;