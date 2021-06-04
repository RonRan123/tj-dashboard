import React, { useState } from "react";
import AdminDash from "./AdminDash.js";
import TeacherDash from "./TeacherDash.js";
import StudentDash from "./StudentDash.js";
import Calendar from "./Calendar";
import StudentDirectory from "./StudentDirectory";
import TeacherDirectory from "./TeacherDirectory";
import {
  FaAppleAlt,
  FaCalendarAlt,
  FaSchool,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import LandingPage from "./LandingPage";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";

const ClassContext = React.createContext([]);
const StudentContext = React.createContext([]);
const TeacherContext = React.createContext([]);

function ClassProvider({ children }) {
  const [classes, setClasses] = useState([]);

  const getMyClasses = async () => {
    console.log("fetching classes");
    const url = new URL("http://localhost:8080/classes/get");
    let res = await fetch(url).then((resp) => resp.json());
    setClasses(res);
    // console.log('books have been set')
  };

  return (
    <ClassContext.Provider value={{ classes, setClasses, getMyClasses }}>
      {children}
    </ClassContext.Provider>
  );
}

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    console.log("fetching students");
    const url = new URL("http://localhost:8080/students/get");
    let res = await fetch(url).then((resp) => resp.json());
    setStudents(res);
    // console.log('books have been set')
  };

  return (
    <StudentContext.Provider value={{ students, setStudents, getStudents }}>
      {children}
    </StudentContext.Provider>
  );
}

function TeacherProvider({ children }) {
  const [teachers, setTeachers] = useState([]);

  const getTeachers = async () => {
    console.log("fetching teachers");
    const url = new URL("http://localhost:8080/teachers/get");
    let res = await fetch(url).then((resp) => resp.json());
    setTeachers(res);
    console.log(res);
  };

  return (
    <TeacherContext.Provider value={{ teachers, setTeachers, getTeachers }}>
      {children}
    </TeacherContext.Provider>
  );
}

function HomeScreen() {
  return <LandingPage />;
  // return (
  // 	// <div> {<LandingPage></LandingPage>}</div>

  // 	// <div>
  // 	// 	<img
  // 	//     style={{ width: "10%" }}
  // 	//     src="https://i1.wp.com/friendsofedgewood.org/wp-content/uploads/ew_mv_banana-slug.jpg"
  // 	//     alt="GO BANANA SLUGS"
  // 	//   ></img>
  // 	// 	<div>
  // 	// 		<h1>TJ Elementary Dashboard</h1>
  // 	//     <h3>Go Banana Slugs!</h3>
  // 	// 		<br />
  // 	// 	</div>
  // 	// </div>
  // );
}

function Home() {
  return (
    <BrowserRouter>
      {/* <div style={{ textAlign: "center" }}>
        <Navbar
          bg="warning"
          variant="dark"
          style={{ position: "sticky" }}
          fixed="top"
        >
          <Navbar.Brand href="/" style={{ paddingLeft: "1%" }}>
            <FaSchool size={35} />
          </Navbar.Brand>
          <NavDropdown
            title="Pages"
            id="basic-nav-dropdown"
            style={{ color:'white', textDecorationColor:'white' }}
          >
            <NavDropdown.Item href="/admin">
              <RiAdminFill size={25} />
              Admin Dashboard
            </NavDropdown.Item>
            <NavDropdown.Item href="/teacher">
              <FaAppleAlt size={25} />
              Teacher Dashboard
            </NavDropdown.Item>
            <NavDropdown.Item href="/calendar">
              {" "}
              <FaCalendarAlt size={25} />
              Calendar
            </NavDropdown.Item>
            <NavDropdown.Item href="/student-dir">
              Student Directory
            </NavDropdown.Item>
            <NavDropdown.Item href="/teacher-dir">
              Teacher Directory
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div> */}
      <Navbar bg="warning" variant="dark" style={{}}>
          <Navbar.Brand href="/" style={{ paddingLeft: "1%" }}>
            <FaSchool size={35} />
          </Navbar.Brand>
          <Nav.Link href="/admin" style={{ color: "white" }}>
            <RiAdminFill size={25} />
            <p style={{ display: "inline", marginLeft: "5px" }}>
              Admin Dashboard
            </p>
          </Nav.Link>
          <Nav.Link href="/teacher" style={{ color: "white" }}>
            <FaAppleAlt size={25} />
            <p style={{ display: "inline", marginLeft: "5px" }}>
              Teacher Dashboard
            </p>
          </Nav.Link>
          <Nav.Link href="/calendar" style={{ color: "white" }}>
            {" "}
            <FaCalendarAlt size={25} />
            <p style={{ display: "inline", marginLeft: "5px" }}>Calendar</p>
          </Nav.Link>
          <Nav.Link href="/student-dir" style={{ color: "white" }}>
            {" "}
            <BsFillPersonFill size={25} />
            <p style={{ display: "inline", marginLeft: "5px" }}>
              Student Directory
            </p>
          </Nav.Link>
          <Nav.Link href="/teacher-dir" style={{ color: "white" }}>
            <FaChalkboardTeacher size={25} />
            <p style={{ display: "inline", marginLeft: "5px" }}>
              Teacher Directory
            </p>
          </Nav.Link>
        </Navbar>
      <Switch>
        <ClassProvider>
          <StudentProvider>
            <TeacherProvider>
              <Route path="/" exact render={() => <HomeScreen />} />
              <Route path="/admin" render={() => <AdminDash />} />
              <Route path="/teacher" render={() => <TeacherDash />} />
              <Route path="/calendar" render={() => <Calendar />} />
              <Route path="/student-dir" render={() => <StudentDirectory />} />
              <Route path="/teacher-dir" render={() => <TeacherDirectory />} />
            </TeacherProvider>
          </StudentProvider>
        </ClassProvider>
      </Switch>
      <footer id="footer">
      <Footer/> 
      </footer>
      
   
    </BrowserRouter>
  );
}

export {
  ClassContext,
  ClassProvider,
  StudentProvider,
  TeacherProvider,
  StudentContext,
  TeacherContext,
};

export default Home;
