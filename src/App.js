import React from 'react';
import axios from '../src/common/axios';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import SearchList from './components/SearchList';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'transparent',
      loading: true,
      searchKeyword: "",
      result: null
    }
  }
  componentWillMount() {

  }
  componentDidMount() {
    this.setState({loading: false})
  }

  onChange(e){
    this.setState({searchKeyword: e.target.value})
  }
  async onKeyPress(e){
    if(e.key === 'Enter'){
      const result = await axios.get(`/search/${this.state.searchKeyword}`)
      //push into another list, send props
      this.setState({result:result})
    }
  }
  render() {
    return (
      <Container fluid style={{ 'min-height': '100vh', 'backgroundColor': this.state.loading ? 'transparent' : '#111111' }}>

        <Row style={{ "height": "100%", "width": "100%" }} className="p-5">
          <Col  className="mx-auto my-auto"  style={{ "height": "100%", "width": "100%" }} >
            {this.state.loading ?
              <Spinner animation="border" />
              :
              <>
              <FloatingLabel label="Search Git Repo" className="mb-3">
                <Form.Control type="text" value={this.state.searchKeyword} placeholder="Example: octokit" onChange={e => this.onChange(e)} onKeyPress={e =>this.onKeyPress(e) }/>
              </FloatingLabel>
              </>
              
            }
            { this.state.result !== null ?
              <SearchList dataList={this.state.result} />: <></>
            }

          </Col>
        </Row>

      </Container>
    )
  }
}
export default App;
