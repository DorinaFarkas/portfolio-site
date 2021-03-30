import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faChartBar, faBook, faGhost, faAdjust, faBorderAll, faTimes, faCloudSunRain, faSnowflake, faCloud, faSmog, faSun, faCloudShowersHeavy, faCloudRain } from '@fortawesome/free-solid-svg-icons'
import Home from './_components/Home';
import Experience from './_components/Experience';
import Education from './_components/Education';
import Works from './_components/Works';
import './App.css';
import ThemeContextProvider from './_components/ThemeContext';

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
