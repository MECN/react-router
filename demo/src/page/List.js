import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        // 打印路由
        console.log(this.props.match)
        console.log(this.props.match.params.id)
    }
    render() { 
        return ( 
            <ul>
                <li>10点半睡觉</li>
                <li>6点起床</li>
                <li>运动</li>
                <li>7点洗漱</li>
                <li>7点半早餐出门上班</li>
            </ul>
         );
    }
}
 
export default List;