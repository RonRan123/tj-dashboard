import React, { useState, useContext, createContext } from "react";
import AdminDash from "./AdminDash.js";
import TeacherDash from "./TeacherDash.js";
import StudentDash from "./StudentDash.js";

import "bootstrap/dist/css/bootstrap.min.css";

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

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "10%" }}
        src="https://i1.wp.com/friendsofedgewood.org/wp-content/uploads/ew_mv_banana-slug.jpg"
        alt="GO BANANA SLUGS"
      ></img>
      <ClassProvider>
        <StudentProvider>
          <TeacherProvider>
            <AdminDash />
          </TeacherProvider>
        </StudentProvider>
      </ClassProvider>
    </div>
  );
}

export {ClassContext, ClassProvider, StudentProvider, TeacherProvider, StudentContext, TeacherContext};

export default Home;
