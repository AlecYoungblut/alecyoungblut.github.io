import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import linkedinSVG from '../assets/icons/linkedin.svg'
import githubSVG from '../assets/icons/github.svg'

library.add(
    faLinkedin,
    faGithub
);

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navClosed: true
        };
    }
    render() {
        return (
            <section className="bg-purple-800 mx-auto w-full fixed z-50">
                <div className="lg:pl-6 pl-20 pr-6 py-4 flex items-center justify-between">
                    <div className="inline-flex">
                        <img className="object-contain h-14 rounded-full mr-5" src="https://media-exp1.licdn.com/dms/image/C4D03AQHLzAG5f8JdUQ/profile-displayphoto-shrink_200_200/0/1539027209316?e=1615420800&v=beta&t=u9NSp1kxTkGr0-_OdrrFkChbp7CQvavJD8uZKaWQ2EE" alt="Girl in a jacket"></img>
                        <a className="font-bold text-5xl hover:text-purple-100 text-white" href="#">
                            Alec Youngblut
                        </a>
                    </div>
                    <div className="flex" onMouseLeave={() => this.setState({ navClosed: true })}>
                        <div className="relative inline-block text-left">
                            <ul className="inline-flex">
                                <li><a className="px-4 text-2xl hover:font-bold hover:text-purple-300 text-white" href="http://alecyoungblut.ca/resume.pdf" target="_blank">Resume</a></li>
                                <li><a className="px-4 text-2xl hover:font-bold hover:text-purple-300 text-white" href="#portfolio">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
export default Navbar;