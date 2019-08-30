import React from 'react';
import {Route,Link} from 'react-router-dom';
import work1 from './Test1';
import work2 from './Test2';

function Index(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workPlace/test1/">技能1</Link></li>
                    <li><Link to="/workPlace/test2/">技能2</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <Route path="/workPlace/test1/" component={work1}></Route>
                <Route path="/workPlace/test2/" component={work2}></Route>
            </div>
        </div>
    )
}
export default Index;