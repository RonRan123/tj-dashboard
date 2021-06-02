import React from 'react';
import AdminDash from './components/AdminDash.js';
import TeacherDash from './components/TeacherDash.js';
import StudentDash from './components/StudentDash.js';
import Home from "./components/Home.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherDirectory from './components/TeacherDirectory.js';
import StudentDirectory from './components/StudentDirectory.js';


function App() {
  
  
  return (
    <div style={{ textAlign: 'center' }}>
      <StudentDirectory/>
    </div>
  );
}

export default App;
