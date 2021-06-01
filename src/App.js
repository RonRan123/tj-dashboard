import React from 'react';
import AdminDash from './components/AdminDash.js';
import TeacherDash from './components/TeacherDash.js';
import StudentDash from './components/StudentDash.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <StudentDash />
    </div>
  );
}

export default App;
