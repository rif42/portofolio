import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Projects from "./components/Projects.js";
import WorkExperience from "./components/WorkExperience.js";
import Contacts from "./components/Contacts";
import profilelogo from "./assets/icons/person.svg";
import explogo from "./assets/icons/journal-text.svg";
import projectslogo from "./assets/icons/boxes.svg";
import contactslogo from "./assets/icons/at.svg";

function App() {
    return (
        <Router>
            <div className='App'>
                <div className='navbar-container'>
                    <Link to='/'>
                        <img src={profilelogo} className='profilelogo' alt='profile logo' />
                    </Link>
                    <Link to='/WorkExperience'>
                        <img src={explogo} className='explogo' alt='experience logo' />
                    </Link>
                    <Link to='/Projects'>
                        <img src={projectslogo} className='projectslogo' alt='projects logo' />
                    </Link>
                    <Link to='/Contacts'>
                        <img src={contactslogo} className='contactslogo' alt='contacts logo' />
                    </Link>
                </div>
                {/* <Profile/> */}
            </div>
            <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/WorkExperience' element={<WorkExperience />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Contacts' element={<Contacts />} />
            </Routes>
        </Router>
    );
}

export default App;
