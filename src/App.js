import React from 'react';
import AdminDash from './components/AdminDash.js';
import TeacherDash from './components/TeacherDash.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <TeacherDash />
    </div>
  );
}

export default App;
