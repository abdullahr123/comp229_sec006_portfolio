import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainRouter from '../MainRouter.jsx';
const App = () => {
return (
<Router>

        {/* Creates nav bar that is visible in all webpages*/}
        <nav>
          <div className="space-x-6">
            <Link to="/">Home</Link>
            <Link to="/About">About Me</Link>
            <Link to="/Education">Education</Link>
            <Link to="/Project">Projects</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </nav>

       

<MainRouter />
</Router>
);
};
export default App;