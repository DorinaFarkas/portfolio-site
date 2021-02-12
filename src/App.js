import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faChartBar, faBook, faGhost, faAdjust, faBorderAll, faTimes, faCloudSunRain, faSnowflake, faCloud, faSmog, faSun, faCloudShowersHeavy, faCloudRain } from '@fortawesome/free-solid-svg-icons'
import Home from './Home';
import Experience from './Experience';
import Education from './Education';
import Works from './Works';
import './App.css';
import ThemeContextProvider from './ThemeContext';

library.add(fab, faCheckSquare, faCoffee, faChartBar, faBook , faGhost, faAdjust, faBorderAll, faTimes, faLinkedin, faLinkedinIn, faCloudSunRain, faSnowflake, faCloud, faSmog, faSun, faCloudShowersHeavy, faCloudRain);

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
