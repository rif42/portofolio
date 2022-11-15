// import "./Navbar.css";
import profilelogo from "../assets/icons/person.svg";
import explogo from "../assets/icons/journal-text.svg";
import projectslogo from "../assets/icons/boxes.svg";
import contactslogo from "../assets/icons/at.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React, { useState } from "react";

export default function Navbar() {
    const [show, setShow] = useState(1);

    return (
        <>
            <div
                className={
                    show === 1
                        ? "hover:cursor-pointer absolute flex flex-col justify-center align-middle bg-white mt-[22.5%] ml-[7.25%] w-[5vw] h-[5vw] rounded-full z-10"
                        : "hover:cursor-pointer absolute flex flex-col justify-center align-middle bg-black w-[5vw] h-[5vw] rounded-full mt-[22.5%] ml-[-2.5%] z-10"
                }
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke={show === 1 ? "black" : "white"}
                    className={
                        show === 1 ? "place-self-start w-[2vw] mx-[0.75vw]" : "place-self-end w-[2vw] mx-[0.75vw]"
                    }
                    onClick={() => setShow(show ? 0 : 1)}
                >
                    {/* <path stroke-linecap='round' stroke-linejoin='round' d= /> */}
                    <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d={show === 1 ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}
                    />
                </svg>
            </div>
            <div className={show === 1 ? "navbar-container h-full sticky" : "hidden"}>
                <Link to='/'>
                    {/* <img src={profilelogo} className='profilelogo' alt='profile logo' /> */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='white'
                        class='w-[3vw]'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                        />
                    </svg>
                </Link>
                <Link to='/WorkExperience'>
                    {/* <img src={explogo} className='explogo' alt='experience logo' /> */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='white'
                        class='w-[3vw]'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                        />
                    </svg>
                </Link>
                <Link to='/Projects'>
                    {/* <img src={projectslogo} className='projectslogo' alt='projects logo' /> */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='white'
                        class='w-[3vw]'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                        />
                    </svg>
                </Link>
                <Link to='/Contacts'>
                    {/* <img src={contactslogo} className='contactslogo' alt='contacts logo' /> */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='white'
                        class='w-[3vw]'
                    >
                        <path
                            stroke-linecap='round'
                            d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
                        />
                    </svg>
                </Link>
            </div>
        </>
    );
}
