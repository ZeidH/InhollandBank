import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

const styles = {
  Nav:{
    position : "absolute",
    left : "0px",
    top : "100px",
    width : "100%",
    height : "6px",
    'background-color': "#E3027E" 

  },
};

export default class TopBar extends PureComponent {
  render() {
    return (
      <div>
      <Nav fill variant="tabs" defaultActiveKey="/Employee/RegisterUser" style={styles.Nav}>
        <Nav.Item>
          <Nav.Link href="/Employee/RegisterUser">Register User</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link Active href="/Employee/Search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Employee/CreateAccount">
          Create Account
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Customer/Overview">
          Account Overview
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Employee/AccountsSearch">
          Account Search
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      );
  }
}