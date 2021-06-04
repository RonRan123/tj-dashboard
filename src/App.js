import React from 'react';
import AdminDash from './components/AdminDash.js';
import TeacherDash from './components/TeacherDash.js';
import StudentDash from './components/StudentDash.js';
import Home from './components/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
function App() {
	return (
		<div id="page-container">
			<div id="content-wrap">
			<Home />
			</div>
		</div>
	);
}

export default App;
