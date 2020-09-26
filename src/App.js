import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faChartBar, faBook, faGhost, faAdjust, faBorderAll, faTimes } from '@fortawesome/free-solid-svg-icons'
import Home from './Home';
import Experience from './Experience';
import Education from './Education';
import Works from './Works';
import './App.css';
import ThemeContextProvider from './ThemeContext';

library.add(fab, faCheckSquare, faCoffee, faChartBar, faBook , faGhost, faAdjust, faBorderAll, faTimes);

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <Home />
          <Works />
          <Education />
          <Experience />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
