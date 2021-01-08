import React from "react";
import gmailSVG from '../assets/icons/gmail.svg'
import linkedinSVG from '../assets/icons/linkedin.svg'
import githubSVG from '../assets/icons/github.svg'

class About extends React.Component {
    render() {
        return (
            <div className="w-full">
                <div className="w-full bg-purple-100 flex justify-center items-center p-8"></div>
                <div className="w-full h-screen bg-purple-300 flex justify-center items-center">
                    <div className="mx-4 text-center text-grey ">
                        <h1 className="font-bold text-6xl mb-4">Alec Youngblut</h1>
                        <h2 className="font-bold text-3xl">Fullstack Developer, Freelance Designer, Passionate Programmer</h2>
                        <div className="inline-flex m-20">
                            <img className="rounded-full h-full" src="https://media-exp1.licdn.com/dms/image/C4D03AQHLzAG5f8JdUQ/profile-displayphoto-shrink_200_200/0/1539027209316?e=1615420800&v=beta&t=u9NSp1kxTkGr0-_OdrrFkChbp7CQvavJD8uZKaWQ2EE" alt="Girl in a jacket"></img>
                        </div>
                        <div className="text-left">
                            <p>
                                Hello! My name's Alec!
                            </p>
                            <p>
                                I'm a recent graduate from Fanshawe College's Computer Programmer Analyst course and am a fullstack developer situated in London, Ontario.
                            </p>
                            <p>
                                This websites purpose is to act as my portfolio for my professional development career.
                            </p>
                            <p>
                                I throughly enjoy all aspects of programming and problem solving and am confident in my ability to learn and to adapt to whatever needs may be presented to
                            </p>
                            <p>
                                I am currently actively seeking employement as a Full Stack developer, if you've stumbled upon this portfolio and wish to speak further, please do not hesitate to reach out!
                            </p>
                        </div>
                        <div>
                            <p className="pt-20">Contact Me</p>
                            <p>
                                <ul className="inline-flex">
                                    <li>
                                        <a className="hover:font-bold " href="mailto:me@alecyoungblut.ca">
                                            <img
                                                src={gmailSVG}
                                                alt=""
                                                class="w-8 m-1"
                                                title="Kotlin"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="" href="https://www.linkedin.com/in/alec-youngblut-57bb7a171/" target="_blank">
                                            <img
                                                src={linkedinSVG}
                                                alt=""
                                                class="w-8 m-1"
                                                title="Kotlin"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/AlecYoungblut" target="_blank">
                                            <img
                                                src={githubSVG}
                                                alt=""
                                                class="w-8 m-1"
                                                title="Kotlin"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};
export default About;