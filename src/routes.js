import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import About from './components/ui/About'
import MemberList from './components/ui/MemberList'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="*" component={About} />
    </Router>
)
		
export default routes