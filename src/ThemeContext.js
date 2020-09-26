import React, { createContext, Component } from 'react';
import portrait1 from './portrait.png';
import portrait2 from './portrait_glitch.png';
import documenation from './documentation.png';
import documenation_dark from './documentation_dark.png';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    constructor() {
        super();
        let localData = localStorage.getItem('isLightTheme');

        this.state = {
            isLightTheme: localData ? JSON.parse(localData) : true,
            light: { syntax: '#555', ui: '#f3f3f3', bg: '#e6e6e6', pic: portrait1, doc: documenation },
            dark: { syntax: '#dedede', ui: '#151515', bg: '#212121', pic: portrait2, doc: documenation_dark }
        }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
        localStorage.setItem('isLightTheme', !this.state.isLightTheme)
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;