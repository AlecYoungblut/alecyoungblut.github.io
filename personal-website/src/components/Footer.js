import React from "react";
import gmailSVG from '../assets/icons/gmail.svg'
import linkedinSVG from '../assets/icons/linkedin.svg'
import githubSVG from '../assets/icons/github.svg'


class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-purple-800 mx-auto w-all">
                <div className="mx-auto px-6 pt-6 pb-2 mt-16">
                    <div className="flex justify-between mb-4">
                        <div className="text-white mt-5">
                            <p>© Alec Youngblut (2021-01-08) </p>
                        </div>
                        <div className="text-right text-white">
                            <p className="text-center text-white">
                                Contact Info
                            </p>
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
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
};
export default Footer;