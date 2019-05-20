import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown,Form, FormControl ,Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
class Navigation extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef(); 
    this.state={
      input:""
    }
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange = (event) => {
    event.preventDefault();
    let path = "/search/"+this.state.input;
    this.props.history.push(path);
  }
  handleChange() {
    const value = this.textInput.current.value;
    this.setState({
      input:value
    })
 }
    render(){
        return(<div className="navigation">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <LinkContainer to="/"><Navbar.Brand href="#home">MovieBook</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/"><Nav.Link href="#">Home</Nav.Link></LinkContainer>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
              <LinkContainer to="/category/romance"><NavDropdown.Item href="#">Romance</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/category/action"><NavDropdown.Item href="#">Action</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/category/western"><NavDropdown.Item href="#">Western</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/category/horror"><NavDropdown.Item href="#">Horror</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </Nav>
            <Form inline onSubmit={this.routeChange}>
              <FormControl ref={this.textInput} type="text" onChange={() => this.handleChange()} placeholder="Search" className="mr-sm-2" />
              <LinkContainer to={"/search/"+this.state.input}><Button variant="outline-success">Search</Button></LinkContainer>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        </div>)
    }
}

export default withRouter(Navigation);