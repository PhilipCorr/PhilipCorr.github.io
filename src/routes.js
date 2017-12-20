import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import About from './components/ui/About'
import pythonInterviewQuestions from './components/ui/blogs/pythonInterviewQuestions'
import sparkInstallation from './components/ui/blogs/sparkInstallation'
import MemberList from './components/ui/MemberList'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/Python-Interview-Questions" component={pythonInterviewQuestions} />
        <Route path="/Spark-Installation" component={sparkInstallation} />
        <Route path="*" component={About} />
    </Router>
)
		
export default routes