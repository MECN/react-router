import React, {Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    cid:1,title:'文章1'
                },
                {
                    cid:2,title:'文章2'
                },
                {
                    cid:3,title:'文章3'
                },
                {
                    cid:4,title:'文章4'
                },
                {
                    cid:5,title:'文章5'
                },
            ]
         }
        this.props.history.push('/home/')
    }
    render() { 
        return (  
            <div>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <li key={index}><Link to={`/list/${item.cid}`}>{item.title}</Link></li>
                    })
                }
            </ul>
            {/* <Redirect to='/home/'>重定向</Redirect> */}
            </div>
        );
    }
}
 
export default Index;