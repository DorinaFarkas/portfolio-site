import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [expanded, setExpanded] = useState(false);
    
    const navbarInstance = (
        <Navbar collapseOnSelect  expanded={expanded} expand="md" fixed="top" variant={theme.variant} bg={theme.variant}>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link onClick={() => setExpanded(false)} activeClass="active" to="Home" spy={true} smooth={true} duration={500} >Home</Link></Nav.Link>
                    <Nav.Link><Link onClick={() => setExpanded(false)} activeClass="active" to="Works" spy={true} smooth={true} duration={500} >Projects</Link></Nav.Link>
                    <Nav.Link><Link onClick={() => setExpanded(false)} activeClass="active" to="Education" spy={true} smooth={true} duration={500} >Education</Link></Nav.Link>
                    <Nav.Link><Link onClick={() => setExpanded(false)} activeClass="active" to="Experience" spy={true} smooth={true} duration={500} >Experience</Link></Nav.Link>
                    <Nav.Link onClick={() => setExpanded(false)} target="_blank" href="https://www.linkedin.com/in/dorina-farkas-b5097b97/"><FontAwesomeIcon
                        icon={['fab', 'linkedin-in']}
                        size='1x'
                    /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <ThemeToggle />
        </Navbar>
    );
    return (
        <div>
            {navbarInstance}
        </div>
    );
}

export default NavBar;
