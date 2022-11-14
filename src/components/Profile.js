import React from "react";
import githublogo from "../assets/icons/github.svg";
import emaillogo from "../assets/icons/envelope.svg";
import resumelogo from "../assets/icons/journal-text.svg";
import Typical from "react-typical";
import "./Profile.css";
// import { motion } from "framer-motion";

export default function Profile() {
    return (
        <div className='profile-container w-full'>
            {/* <img id='bgimage' src={bg} alt='githublogo' /> */}
            <div className='flex flex-col w-[40vw]'>
                <p className='font-poppins text-[6vw] text-black font-bold'> Hello there.</p>
                <p className='font-poppins text-[2vw] text-black font-medium'> My name is Rifky Ariya.</p>
                <span className='font-poppins text-[2vw] text-black font-medium'>
                    I am{" "}
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={[
                            "A Web Developer",
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
                            500,
                        ]}
                    />
                </span>
                <p className='font-poppins text-[2vw] text-black font-medium'>... and this is my story!</p>

                <div className='icons pt-[2vw]'>
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
            {/* <div className='flex flex-col bg-duck bg-no-repeat bg-right w-[80vw] h-[35vw]'></div> */}
            <img
                className='place-self-center w-[45vw] mr-[-40vw] overflow-hidden'
                src={require("../assets/lol.png")}
                alt={"ducky"}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
            />
        </div>
    );
}
