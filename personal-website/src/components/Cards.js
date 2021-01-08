import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import MobileProject1Modal from './modals/MobileProject1Modal.js';
import MobileProject2Modal from './modals/MobileProject2Modal.js';
import FitnessWebsiteModal from './modals/FitnessWebsiteModal.js';

import mobileprojectcardimg from '../assets/images/MobileProject.png'
import fitnesswebsitecardimg from '../assets/images/FitnessWebsite.png'
import spacyprojectcardimg from '../assets/images/SpacyProject.png'
import putioprojectcardimg from '../assets/images/DownloadManager.png'
import canadacitiesprojectcardimg from '../assets/images/CanadaCities.png'
import caffeineprojectcardimg from '../assets/images/CaffeineProject2.png'

import androidSVG from '../assets/icons/android.svg'
import csharpSVG from '../assets/icons/csharp.svg'
import dotnetSVG from '../assets/icons/dotnet.svg'
import figmaSVG from '../assets/icons/figma.svg'
import javaSVG from '../assets/icons/java.svg'
import kotlinSVG from '../assets/icons/kotlin.svg'
import mlkitSVG from '../assets/icons/mlkit.png'
import oauthSVG from '../assets/icons/oauth.svg'
import pythonSVG from '../assets/icons/python.svg'
import reactSVG from '../assets/icons/react.svg'
import restapiSVG from '../assets/icons/rest-api.svg'
import spacySVG from '../assets/icons/spacy.svg'
import tailwindSVG from '../assets/icons/tailwindcss.svg'
import tensorflowSVG from '../assets/icons/tensorflow.svg'



library.add(
    faLinkedin,
    faGithub,
    faArrowRight
);

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div class="container mx-auto mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {/* Mobile Project */}
                <div class="rounded-lg overflow-hidden">
                    <div class="relative overflow-hidden pb-60">
                        <img
                            class="absolute h-full w-full object-cover object-center"
                            src={mobileprojectcardimg}
                            alt=""
                        />
                    </div>
                    <div class="relative bg-purple-200">
                        <div class="py-5 px-8">
                            <h3 class="text-2xl font-bold">Artistic Style Transfer with TensorFlow</h3>
                            <div class="text-gray-600 text-xs font-medium flex mb-4 mt-2">
                                <p> Created for INFO 5126 (Mobile Development) – ML Kit. Project requirements available upon request.</p>
                            </div>
                            <p class="">
                                Android application designed to demonstrate artistic style transfer between a pre-set number of "style" photos and either a new photo taken during execution or one selected from the gallery.
                            </p>
                            <div class="mt-10 flex justify-between items-center">
                                <div class="inline-flex">
                                    <img
                                        src={androidSVG}
                                        alt=""
                                        class="w-6 m-1"
                                        title="Android and Android Studio"
                                    />
                                    <img
                                        src={kotlinSVG}
                                        alt=""
                                        class="w-6 m-1"
                                        title="Kotlin"
                                    />
                                    <img
                                        src={figmaSVG}
                                        alt=""
                                        class="w-6 h-8 m-1 p-1"
                                        title="Figma"
                                    />
                                    <img
                                        src={mlkitSVG}
                                        alt=""
                                        class="w-10 h-8 m-1"
                                        title="ML Kit"
                                    />
                                    <img
                                        src={tensorflowSVG}
                                        alt=""
                                        class="w-6 m-1"
                                        title="Tensorflow"
                                    />
                                </div>
                                <MobileProject2Modal show={this.state.show} handleClose={this.hideModal}>
                                </MobileProject2Modal>
                                <button type="button" onClick={this.showModal} class="flex rounded-full font-bold text-gray px-4 py-1 transition duration-400 ease-in-out hover:bg-purple-400">
                                    Read more
                                    <FontAwesomeIcon icon={['fa', 'arrow-right']} size="1x" className="ml-1 mt-1 " />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Fitness Website */}
                <div class="rounded-lg overflow-hidden">
                    <div class="relative overflow-hidden pb-60">
                        <img
                            class="absolute h-full w-full object-cover object-center"
                            src={fitnesswebsitecardimg}
                            alt=""
                        />
                    </div>
                    <div class="relative bg-purple-200">
                        <div class="py-5 px-8">
                            <h3 class="text-2xl font-bold">Yeomans Fitness and Personal Training</h3>
                            <div class="text-gray-600 text-xs font-medium flex mb-4 mt-2 items-center">
                                <p>Work in progress, created for a friend's new solo fitness career</p>
                            </div>
                            <p class="">
                                Work in progress responsive React single-page-application (SPA) with Tailwind for a friend's upcoming solo fitness career. The pandemic has currently restricted client access and as such there are still placeholders for text and images.
                            </p>
                            <div class="mt-10 flex justify-between items-center">
                                <div class="inline-flex">
                                    <img
                                        src={reactSVG}
                                        alt=""
                                        class="w-8 m-1"
                                        title="React"
                                    />
                                    <img
                                        src={tailwindSVG}
                                        alt=""
                                        class="w-8 m-1"
                                        title="Tailwind CSS"
                                    />
                                </div>
                                <FitnessWebsiteModal show={this.state.show} handleClose={this.hideModal}>
                                </FitnessWebsiteModal>
                                <button type="button" onClick={this.showModal} class="flex rounded-full font-bold text-gray px-4 py-1 transition duration-400 ease-in-out hover:bg-purple-400">
                                    Read more
                                    <FontAwesomeIcon icon={['fa', 'arrow-right']} size="1x" className="ml-1 mt-1 " />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Nlm and SpaCy */}
                <div class="rounded-lg overflow-hidden">
                    <div class="relative overflow-hidden pb-60">
                        <img
                            class="absolute h-full w-full object-cover object-left-bottom"
                            src={spacyprojectcardimg}
                            alt=""
                        />
                    </div>
                    <div class="relative bg-purple-200">
                        <div class="py-5 px-8">
                            <h3 class="text-2xl font-bold">Stock Buy/Sell Estimator</h3>
                            <div class="text-gray-600 text-xs font-medium flex mb-4 mt-2">
                                <p>Created for INFO 3142 (Emerging Technologies) – Stock Buy/Sell Estimator. Project requirements available upon request.</p>
                            </div>
                            <p class="">
                                Python application that utilizes NLP processing from the spaCy library to extract some free-form information from a series of (prefiltered) brokerage purchase requests to purchase for n amount and m number of companies.
                            </p>
                            <div class="mt-10 flex justify-between items-center">
                                <div class="inline-flex">
                                    <img
                                        src={pythonSVG}
                                        alt=""
                                        class="w-6 m-1"
                                        title="Python"
                                    />
                                    <img
                                        src={spacySVG}
                                        alt=""
                                        class="w-12 m-1"
                                        title="spaCy"
                                    />
                                </div>
                                <p class="">
                                    Read more
                                        <FontAwesomeIcon icon={['fa', 'arrow-right']} size="1x" className="ml-1 mt-1" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Put.io Downloader */}
                <div class="rounded-lg overflow-hidden">
                    <div class="relative overflow-hidden pb-60">
                        <img
                            class="absolute h-full w-full object-cover object-center"
                            src={putioprojectcardimg}
                            alt=""
                        />
                    </div>
                    <div class="relative bg-purple-200">
                        <div class="py-5 px-8">
                            <h3 class="text-2xl font-bold">Put.io Download Manager</h3>
                            <div class="text-gray-600 text-xs font-medium flex mb-4 mt-2">
                                <p>Work in progress for a React based download manager for put.io to be utilized by immediate family.</p>

                            </div>
                            <p class="">
                                Work in progress React based single-page-application (SPA) download manager for put.io. Interacts with an OAuth RESTful API to build file and folder information as well as generate direct download links.
                            </p>
                            <div class="mt-10 flex justify-between items-center">
                                <div class="inline-flex">
                                    <img
                                        src={reactSVG}
                                        alt=""
                                        class="w-8 m-1"
                                        title="React"
                                    />
                                    <img
                                        src={oauthSVG}
                                        alt=""
                                        class="w-8 m-1"
                                        title="OAuth"
                                    />
                                    <img
                                        src={restapiSVG}
                                        alt=""
                                        class="w-8 m-1"
                                        title="RESTful API"
                                    />
                                </div>
                                <p class="">
                                    Read more
                                        <FontAwesomeIcon icon={['fa', 'arrow-right']} size="1x" className="ml-1 mt-1" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Caffeine Dosage Tracker */}
                <div class="rounded-lg overflow-hidden">
                    <div class="relative overflow-hidden pb-60">
                        <img
                            class="absolute h-full w-full object-cover object-top"
                            src={caffeineprojectcardimg}
                            alt=""
                        />
                    </div>
                    <div class="relative bg-purple-200">
                        <div class="py-5 px-8">
                            <h3 class="text-2xl font-bold">Caffeine Dosage Tracker</h3>
                            <div class="text-gray-600 text-xs font-medium flex mb-4 mt-2">
                                <p> Created for INFO 3136 (Mobile Development) – Event Recorder. Project requirements available upon request.</p>
                            </div>
                            <p class="">
                                Android application designed to track caffeine intake over time and then display that information in an interacable (click/zoom) graph visualization of dosage over time.
                            </p>
                            <div class="mt-10 flex justify-between items-center">
                                <div class="inline-flex">
                                    <img
                                        src={androidSVG}
                                        alt=""
                                        class="w-6 m-1"
                                        title="Android and Android Studio"
                                    />
                                    <img
                                        src={javaSVG}
                                        alt=""
                                        class="w-6 m-1"
                                        title="Java"
                                    />
                                </div>
                                <MobileProject1Modal show={this.state.show} handleClose={this.hideModal}>
                                </MobileProject1Modal>
                                <button type="button" onClick={this.showModal} class="flex rounded-full font-bold text-gray px-4 py-1 transition duration-400 ease-in-out hover:bg-purple-400">
                                    Read more
                                    <FontAwesomeIcon icon={['fa', 'arrow-right']} size="1x" className="ml-1 mt-1 " />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Canada Cities */}
                <div class="rounded-lg overflow-hidden">
                    <div class="relative overflow-hidden pb-60">
                        <img
                            class="absolute h-full w-full object-cover object-center"
                            src={canadacitiesprojectcardimg}
                            alt=""
                        />
                    </div>
                    <div class="relative bg-purple-200">
                        <div class="py-5 px-8">
                            <h3 class="text-2xl font-bold">Parsing Data Formats - Canadian Cities</h3>
                            <div class="text-gray-600 text-xs font-medium flex mb-4 mt-2">
                                <p>Created for INFO 5101 (C# Advanced Topics) – Canada Cities. Project requirements available upon request.</p>
                            </div>
                            <p class="">
                                .NET project that utilizes parsing from JSON/XML/CSV and C# generics to display information for each city and province in Canada a .NET Windows Form.
                            </p>
                            <div class="mt-10 flex justify-between items-center">
                                <div class="inline-flex">
                                    <img
                                        src={csharpSVG}
                                        alt=""
                                        class="w-8 m-1"
                                        title="C#"
                                    />
                                    <img
                                        src={dotnetSVG}
                                        alt=""
                                        class="w-8 m-1"
                                        title="Microsoft .NET"
                                    />
                                </div>
                                <p class="">
                                    Read more
                                        <FontAwesomeIcon icon={['fa', 'arrow-right']} size="1x" className="ml-1 mt-1" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};
export default Footer;