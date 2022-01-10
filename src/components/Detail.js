import React, {Component} from 'react';

export class Detail extends Component{
    constructor(props){
        super(props);
        console.log("props", props)
    }
    render(){
        console.log("this.props", this.props)
        return(
            <div>
                <h1>Detail</h1>
            </div>
        )
    }
}

export default Detail;