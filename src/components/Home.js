import React, { useState } from "react";
import AdminDash from "./AdminDash.js";
import TeacherDash from "./TeacherDash.js";
import StudentDash from "./StudentDash.js";
import Calendar from "./Calendar";
import StudentDirectory from "./StudentDirectory";
import TeacherDirectory from "./TeacherDirectory";
import {FaAppleAlt, FaCalendarAlt, FaSchool} from 'react-icons/fa'
import {RiAdminFill} from 'react-icons/ri'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Nav, Navbar } from "react-bootstrap";

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
  return (
    <div>
      <img
        style={{ width: "10%" }}
        src="https://i1.wp.com/friendsofedgewood.org/wp-content/uploads/ew_mv_banana-slug.jpg"
        alt="GO BANANA SLUGS"
      ></img>
      <div>
        <h1>TJ Elementary Dashboard</h1>
        <h3>Go Banana Slugs!</h3>
        <br />
      </div>
    </div>
  );
}

function Home() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <Navbar bg="primary" variant='dark' style={{marginBottom:"1%"}}>
          <Navbar.Brand href="/" style={{paddingLeft:'1%'}}><FaSchool size={35}/></Navbar.Brand>
          <Nav.Link href='/admin' style={{color: 'white'}}><RiAdminFill size={25}/>Admin Dashboard</Nav.Link>
          <Nav.Link href='/teacher' style={{color: 'white'}}><FaAppleAlt size={25} />Teacher Dashboard</Nav.Link>
          <Nav.Link href='/calendar' style={{color: 'white'}}> <FaCalendarAlt size={25}/>Calendar</Nav.Link>
          <Nav.Link href='/student-dir' style={{color: 'white'}}>Student Directory</Nav.Link>
          <Nav.Link href='/teacher-dir' style={{color: 'white'}}>Teacher Directory</Nav.Link>

        </Navbar>
        <Switch>
          <ClassProvider>
            <StudentProvider>
              <TeacherProvider>
                <Route path="/" exact render={() => <HomeScreen />} />
                <Route path="/admin" render={() => <AdminDash />} />
                <Route path="/teacher" render={() => <TeacherDash />} />
                <Route path="/calendar" render={() => <Calendar/>}/>
                <Route path="/student-dir" render={() => <StudentDirectory/>}/>
                <Route path="/teacher-dir" render={() => <TeacherDirectory/>}/>
              </TeacherProvider>
            </StudentProvider>
          </ClassProvider>
        </Switch>
      </div>
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
