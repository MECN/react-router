import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Index from './page/Index';
import List from './page/List';
import Home from './page/Home';
function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/123">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index}></Route>
            <Route path="/list/:id" exact component={List}></Route>
            <Route path="/home/" exact component={Home}></Route>
        </Router>
    )
}
export default AppRouter;