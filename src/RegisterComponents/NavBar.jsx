import React, { PureComponent } from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

const styles = {
  Nav:{
    position : "absolute",
    left : "0px",
    top : "120px",
    width : "100%",
    height : "6px",
  },
};

export default class TopBar extends PureComponent {
  render() {
    return (
      <div>
      <Nav fill variant="tabs" defaultActiveKey="/home" style={styles.Nav}>
        <Nav.Item>
          <Nav.Link href="/home">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
          Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      );
  }
}