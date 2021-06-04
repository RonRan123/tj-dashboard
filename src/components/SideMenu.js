import React, { useState } from "react";
import { Sidenav, Dropdown, Icon, Toggle, Nav } from 'rsuite'; 
import {FaAppleAlt, FaCalendarAlt, FaSchool} from 'react-icons/fa';
import {RiAdminFill} from 'react-icons/ri';

export default class SideMenu extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: '1'
      };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const { expanded } = this.state;
  
      return (
        <div style={{ width: 250 }}>
          <Toggle onChange={this.handleToggle} checked={expanded} />
          <hr />
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={['3', '4']}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                    <FaSchool size={35}/>
                </Nav.Item>
                <Dropdown
                  placement="rightStart"
                  eventKey="3"
                  title="Pages"
                  icon={<Icon icon="magic" />}
                >
                  <Dropdown.Item eventKey="3-1"><RiAdminFill size={25}/>Admin Dashboard</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2"><FaAppleAlt size={25} />Teacher Dashboard</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3"><FaCalendarAlt size={25}/>Calendar</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">Student Directory</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">Teacher Directory</Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      );
    }
  }
  
 

