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
                    project={<DataVisualisation />}

                />
                <WorkCard
                    icon={'border-all'}
                    title={'Tic Tac Toe'}
                    project={<TicTacToe />}
                />
                <WorkCard
                    icon={'book'}
                    title={'Reading list'}
                    project={<Todo />}
                />

            </div>
        </div>
    );
}

export default Works;