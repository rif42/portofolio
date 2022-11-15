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
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            {/* <div className='container w-full '> */}
            {/* <Profile /> */}
            <Navbar />
            <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/WorkExperience' element={<WorkExperience />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Contacts' element={<Contacts />} />
            </Routes>
            {/* </div> */}
        </Router>
    );
}

export default App;
