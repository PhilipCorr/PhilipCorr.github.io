import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import home from './components/ui/home';
import blog from './components/ui/blog';
import pythonInterviewQuestions from './components/ui/blogs/pythonInterviewQuestions';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={home} />
		<Route path="/Python-Interview-Questions" component={pythonInterviewQuestions} />
		<Route path="/Blog" component={blog} />
	</Router>
);
		
export default routes;