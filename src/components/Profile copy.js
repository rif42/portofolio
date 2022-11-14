import React from "react";
import githublogo from "../assets/icons/github.svg";
import emaillogo from "../assets/icons/envelope.svg";
import resumelogo from "../assets/icons/journal-text.svg";
import Typical from "react-typical";
import "./Profile.css";
import bg from "../assets/lol.png";

export default function Profile() {
    return (
        <div className='profile-container'>
            <img id='bgimage' src={bg} alt='githublogo' />
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='cols'>
                        <div className='profile-details-name'>
                            <span className='primarytext'> Hello there.</span>
                            <br></br>
                        </div>
                        <div className='profile-details-role'>
                            <span className='actualname'> My name is Rifky Ariya.</span>
                            <br></br>
                            <span className='primarytext'>
                                I am{" "}
                                <Typical
                                    loop={Infinity}
                                    wrapper='b'
                                    steps={[
                                        "A Web Developer(React)",
                                        1000,
                                        "An Article Writer",
                                        1000,
                                        "A Coding Teacher",
                                        1000,
                                        "An English Teacher",
                                        1000,
                                        "A Junior Programmer",
                                        1000,
                                        "A Cybersecurity Enthusiast",
                                        1000,
                                        "An Imperfect Being",
                                        250,
                                    ]}
                                />
                            </span>
                        </div>
                        <div className='profile-details-etc'>... and this is my story!</div>
                        <div className='icons'>
                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=ee.guy.42@gmail.com'>
                                <img src={emaillogo} alt='emaillogo' />
                            </a>{" "}
                            <a href='https://github.com/rif42?tab=repositories'>
                                <img src={githublogo} alt='githublogo' size='100px' />
                            </a>{" "}
                            <a href='https://github.com/rif42?tab=repositories'>
                                <img src={resumelogo} alt='githublogo' size='100px' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
