import React, { Component } from 'react';
import{ Navigate} from 'react-router-dom'
import { Card } from 'react-bootstrap';

export class SearchList extends Component {
    constructor(props) {
        super(props)
        this.state={
            navigate: false,
            item: null
        }
    }
    onCardClick(item){
        console.log("item", item)
       this.setState({
           item: item,
           navigate:true
       })
    }

    render() {
        const {dataList} = this.props;
        dataList.data.items.map(item => {
            console.log(item)
        })
    
        const renderItems = dataList.data.items.map((item) => {
            return (
            <Card className="mt-1 mb-1">
                <Card.Body>
                    <Card.Title onClick={this.onCardClick.bind(this,item) } className="text-info">
                        {item.full_name}
                    </Card.Title>
                    <ul style={{'listStyle': 'none'}}>
                        <li> Author: {item.owner.login}</li>
                        <li>Stars: {item.stargazers_count}</li>
                        <li>Watcher: {item.watchers_count}</li>
                        <li>Forks: {item.forks_count}</li> 
                        <li>Description: {item.description}</li>
                        <li>Updated At: {item.updated_at}</li>
                    </ul>
                </Card.Body>
                {/* inside detail page */}
                {/* <Card.Body>
                    <Card.Title>{item.owner.login} </Card.Title>
                    <Card.Text>
                        <ul style={{'listStyle':'none'}}>
                            <li key={item.id+item.full_name}>{item.full_name}</li>
                            <li key={item.id+item.open_issues_count}>{item.open_issues_count}</li>
                            <li key={item.id+item.default_branch}>{item.default_branch}</li>
                        </ul>
                    </Card.Text>
                </Card.Body> */}
            </Card>
            )

        })

        return (
            <div>
                <>
                <p className="text-light"> Total Search results: {dataList.data.total_count}  </p>
                {renderItems}
                </>
                { this.state.navigate? 
                 <Navigate to={`/detail/${this.state.item.id}`}/> : null
                //  this.state.item
            }
                
            </div>
        )
    }
}

export default SearchList;