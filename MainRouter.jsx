import React from 'react'
import { Route, Routes} from 'react-router-dam'
import Home from './ components/Home'
import About from './client/src/About'
import Contact from './client/src/Contact'
import Education from './client/src/Education'
import Project from './client/src/Project'
import Layout from './components/Layout'

const MainRouter = () => {
    return (<div>

        <Routes>

                <Route exact path="/" element={<Home />}/>
                <Route exact path="/About" element={<About />}/>
                <Route exact path="/Contact" element={<Contact />}/>
                <Route exact path="/Contact" element={<Education />}/>
                <Route exact path="/Contact" element={<Project />}/>
                <Route exact path="/Contact" element={<Layout />}/>



        </Routes>

    </div>)
}

export default MainRouter