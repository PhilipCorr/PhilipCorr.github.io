import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import About from './components/ui/About'
import MemberList from './components/ui/MemberList'
import Solitaire from './components/ui/Solitaire'
import Whack from './components/ui/Whack'
// import Whoops404 from './components'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="whack" component={Whack} />
        <Route path="*" component={About} />
    </Router>
)
		
export default routes