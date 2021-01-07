import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
    faLinkedin,
    faGithub
);


class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-purple-800 mx-auto w-all">
                <div className="mx-auto px-6 pt-10 pb-6 mt-16">
                    <div className="flex justify-between mb-4">
                        <div className="text-white">
                            <p>© Alec Youngblut 2021.</p>
                        </div>
                        <div className="text-right text-white">
                            <a className="hover:font-bold " href="/">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="mr-2 text-white hover:text-blue-500" />
                            </a>
                            <a className="hover:font-bold" href="/">
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="mr-2 text-white hover:text-black" />
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
};
export default Footer;