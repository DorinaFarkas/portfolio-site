import React, { useContext } from 'react';
import WorkCard from './WorkCard';
import DataVisualisation from './DataVisualisation/DataVisualisation';
import Todo from './Todo';
import { ThemeContext } from './ThemeContext';
import './Works.css';
import TicTacToe from './Game/TicTacToe';

function Works() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="Works" id="Works" style={{ background: theme.bg, color: theme.syntax }}>
            <div className="section-title">
                <h2>Little Projects</h2>
            </div>
            <div className="Works-conatiner">

                <WorkCard
                    icon={'chart-bar'}
                    title={'Data Visualisation'}
                    description={'This project was made using React.js, Hooks, and nivo library'}
                    project={<DataVisualisation />}

                />
                <WorkCard
                    icon={'border-all'}
                    title={'Tic Tac Toe'}
                    description={'This project was made using React.js, Hooks, and Context'}
                    project={<TicTacToe />}
                />
                <WorkCard
                    icon={'book'}
                    title={'Reading list'}
                    description={'This project was made using React.js, Hooks, Context, Reducer, and uuid package'}
                    project={<Todo />}
                />

            </div>
        </div>
    );
}

export default Works;