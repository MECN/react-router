import React from 'react';
import {Route,Link} from 'react-router-dom';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/test1/">react</Link></li>
                    <li><Link to="/video/test2/">flutter</Link></li>
                    <li><Link to="/video/test3/">vue</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <Route path="/video/test1/" component={Test1}></Route>
                <Route path="/video/test2/" component={Test2}></Route>
                <Route path="/video/test3/" component={Test3}></Route>
            </div>
        </div>
    )
}
export default Video;