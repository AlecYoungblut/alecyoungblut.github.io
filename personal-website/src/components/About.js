import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="w-full h-1/2 bg-hero-pattern bg-fixed bg-no-repeat bg-cover">
                <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
                    <div className="mx-4 text-center text-white ">
                        <h1 className="font-bold text-6xl mb-4">Alec Youngblut</h1>
                        <h2 className="font-bold text-3xl">Fullstack Developer, Freelance Designer, Passionate Programmer</h2>
                        <div className="inline-flex m-10">
                            <img className=" rounded-full" src="https://media-exp1.licdn.com/dms/image/C4D03AQHLzAG5f8JdUQ/profile-displayphoto-shrink_200_200/0/1539027209316?e=1615420800&v=beta&t=u9NSp1kxTkGr0-_OdrrFkChbp7CQvavJD8uZKaWQ2EE" alt="Girl in a jacket"></img>
                        </div>
                        <div>
                            <p>
                                Hello! My name's Alec!
                            </p>
                            <p>
                                I'm a recent graduate from Fanshawe College's Computer Programmer Analyst course and am a fullstack developer located in London, Ontario.  This websites purpose is to act as my portfolio for my professional development career.
                            </p>
                            <p>
                                I throughly enjoy all aspects of programming and problem solving and am confident in my ability to learn and to adapt to whatever needs may be presented to
                            </p>
                            <p>
                                I am currently actively seeiking employement as a Full Stack developer, if you've stumbled upon this portfolio and wish to speak further, please do not hesitate to reach out!
                            </p>
                            <p>
                                Contact Me
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};
export default About;