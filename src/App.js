import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './profile/Profile'
import Projects from './projects/Projects.js';
import WorkExperience from './work experience/WorkExperience.js';
import profilelogo from './icons/person.svg';
import explogo from './icons/journal-text.svg';
import projectslogo from './icons/boxes.svg';
import contactslogo from './icons/at.svg';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='navbar-container'>
        <img src={profilelogo} className='profilelogo' alt='profile logo'/>
        <img src={explogo} className='explogo' alt='experience logo'/>
        <img src={projectslogo} className='projectslogo' alt='projects logo'/>
        <img src={contactslogo} className='contactslogo' alt='contacts logo'/>
      </div>
      {/* <Profile/> */}
    </div>
    <Routes>
      <Route path='/' element={<Profile/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/WorkExperience' element={<WorkExperience/>}/>
    </Routes>
    </Router>
  );
}

export default App;
