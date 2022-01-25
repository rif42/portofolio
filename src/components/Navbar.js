import './Navbar.css'
import profilelogo from '../icons/person.svg';
import explogo from '../icons/journal-text.svg';
import projectslogo from '../icons/boxes.svg';
import contactslogo from '../icons/at.svg';



import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <img src={profilelogo} className='profilelogo' alt='profile logo'/>
            <img src={explogo} className='explogo' alt='experience logo'/>
            <img src={projectslogo} className='projectslogo' alt='projects logo'/>
            <img src={contactslogo} className='contactslogo' alt='contacts logo'/>
        </div>
    )
}
