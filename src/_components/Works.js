import React, { useContext } from 'react';
import WorkCard from './WorkCard';
import DataVisualisation from '../Projects/DataVisualisation/DataVisualisation';
import Todo from './Todo';
import { ThemeContext } from './ThemeContext';
import '../_styleSheets/Works.css';
import TicTacToe from '../Projects/Game/TicTacToe';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll'
import WeatherApp from '../Projects/WeatherApp/WeatherApp';

function Works() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <Element name="Works">
            <div className="Works" id="Works" style={{ background: theme.bg, color: theme.syntax }}>
                <div className="section-title">
                    <h2>Little Projects</h2>
                </div>
                <div className="Works-conatiner">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs>
                                <WorkCard
                                    icon={'chart-bar'}
                                    title={'Data Visualisation'}
                                    description={'This project was made by using React.js, Hooks, and nivo library'}
                                    project={<DataVisualisation />}

                                />
                            </Col>

                            <Col xs>
                                <WorkCard
                                    icon={'border-all'}
                                    title={'Tic Tac Toe'}
                                    description={'This project was made by using React.js, Hooks, and Context'}
                                    project={<TicTacToe />}
                                />

                            </Col>
                            <Col xs>
                                <WorkCard
                                    icon={'book'}
                                    title={'Reading list'}
                                    description={'This project was made by using React.js, Hooks, Context, Reducer, and uuid package'}
                                    project={<Todo />}
                                />
                            </Col>
                            <Col xs>
                                <WorkCard
                                    icon={'cloud-sun-rain'}
                                    title={'Weather app'}
                                    description={'This project was made by using React.js, Hooks, OpenWeatherMap API'}
                                    project={<WeatherApp />}
                                />
                            </Col>
                        </Row>

                    </Container>

                </div>
            </div>
        </Element>
    );
}

export default Works;