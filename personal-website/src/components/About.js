import React from "react";
import gmailSVG from '../assets/icons/gmail.svg'
import linkedinSVG from '../assets/icons/linkedin.svg'
import githubSVG from '../assets/icons/github.svg'

class About extends React.Component {
    render() {
        return (
            <section className="bg-purple-300 mx-auto">
                <section className="container mx-auto px-6 p-10" >
                    <h1 className="font-bold text-6xl mb-4">Alec Youngblut</h1>
                    <h2 className="font-bold text-3xl">Fullstack Developer, Freelance Designer, Passionate Programmer</h2>
                    <div className="inline-flex m-12 mb-8">
                        <img className="rounded-full h-full" src="https://media-exp1.licdn.com/dms/image/C4D03AQHLzAG5f8JdUQ/profile-displayphoto-shrink_200_200/0/1539027209316?e=1615420800&v=beta&t=u9NSp1kxTkGr0-_OdrrFkChbp7CQvavJD8uZKaWQ2EE" alt="Girl in a jacket"></img>
                    </div>
                    <div className="w-full text-left text-2xl font-semibold">
                        <p>
                            Hello! My name's Alec!
                        </p>
                        <p className="pt-8">
                            I'm a recent graduate from Fanshawe College's Computer Programmer Analyst course as well as a full stack developer situated in my hometown of London, Ontario.
                        </p>
                        <p className="pt-4">
                            This website acts as my portfolio of work for both my personal projects and professional career.
                        </p>
                        <p className="pt-4">
                            I throughly enjoy all aspects of programming and problem solving and I am confident in my ability to learn and to adapt to whatever client needs may be required of me
                        </p>
                        <p className="pt-8"></p>
                        <p>
                            I am currently actively seeking employement as a full stack developer, if you've stumbled upon this portfolio and wish to speak further or for more information, please do not hesitate to reach out!
                        </p>
                    </div>
                    <div className="text-xl font-semibold">
                        <p className="pt-6 opacity-80">
                            My Contact Info (can also be found in my <a href="http://alecyoungblut.ca/resume.pdf" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">resume</a>)
				        </p>
                        <p>
                            <ul className="inline-flex pt-2">
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
                </section>
            </section>
        );
    }
};
export default About;