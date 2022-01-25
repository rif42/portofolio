import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Profile from './profile/Profile'
import Projects from './projects/Projects.js';
import WorkExperience from './work experience/WorkExperience.js';
import Contacts from './contacts/Contacts';
import profilelogo from './icons/person.svg';
import explogo from './icons/journal-text.svg';
import projectslogo from './icons/boxes.svg';
import contactslogo from './icons/at.svg';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='navbar-container'>
        <Link to='/'><img src={profilelogo} className='profilelogo' alt='profile logo'/></Link>
        <Link to='/WorkExperience'><img src={explogo} className='explogo' alt='experience logo'/></Link>
        <Link to='/Projects'><img src={projectslogo} className='projectslogo' alt='projects logo'/></Link>
        <Link to='/Contacts'><img src={contactslogo} className='contactslogo' alt='contacts logo'/></Link>
      </div>
      {/* <Profile/> */}
    </div>
    <Routes>
      <Route path='/' element={<Profile/>}/>
      <Route path='/WorkExperience' element={<WorkExperience/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
    </Routes>
    </Router>
  );
}

export default App;
