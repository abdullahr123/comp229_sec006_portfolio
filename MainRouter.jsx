import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './src/About'
import Contact from './src/Contact'
import Education from './src/Education'
import Project from './src/Project'
import Services from './src/services'
import Layout from './components/Layout'
import './Portfolio.css'

const MainRouter = () => {
    return (<div>
        {/*Creates Routes and Links for each webpage*/}
        <Routes>

                <Route exact path="/" element={<Home />}/>
                <Route exact path="/About" element={<About />}/>
                <Route exact path="/Contact" element={<Contact />}/>
                <Route exact path="/Services" element={<Services />}/>
                <Route exact path="/Education" element={<Education />}/>
                <Route exact path="/Project" element={<Project />}/>
                <Route exact path="/Layout" element={<Layout />}/>

        </Routes>

    </div>)
}

export default MainRouter