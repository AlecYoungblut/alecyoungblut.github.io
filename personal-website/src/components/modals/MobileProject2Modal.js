import './modal.css';
import mobileprojectcardimg from '../../assets/images/MobileProject.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(
    faTimesCircle
);

const MobileProject2Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div class="p-2">
                    <div class="flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                        <div class="bg-cover">
                            <iframe className="mb-1" width="560" height="315" src="https://www.youtube.com/embed/PVWGOjtIWP0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/RsDBoP2yZ14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="w-2/3 m-2 mt-4">
                            <h1 class="text-gray-900 font-bold text-3xl">Artistic Style Transfer with TensorFlow</h1>
                            <div class='mt-3 mx-3 flex'>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#AndroidStudio</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Kotlin</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Figma</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#MLKit</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#TensorFlow</span>
                            </div>
                            <p class="text-gray-600 text-sm text-left p-4">
                                This project was an Android application that was created and designed to demonstrate artistic style transfer between a pre-set number of "style" photos and either a new photo taken during execution or one selected from the gallery. This project was created to suit the project requirements for INFO 5126 (Mobile Development) of Fanshawe’s Computer Programmer Analyst course. This project took advantage of a library that is utilized by MLKit called TensorFlow to create pastiches (a work of visual art, literature, theatre or music that imitates the style or character of the work of one or more artists) through the concept of Artistic Style Transfer by utilizing the models that are contained within the TensorFlow library.
                            </p>
                            <p class="text-blue-700 underline text-sm text-left p-4">
                                <p className="hover:text-blue-300"><a href="https://github.com/AlecYoungblut/mobile-final-project" target="_blank">Github Repository</a></p>
                                <p className="hover:text-blue-300"><a href="https://www.figma.com/file/nKY6p23G9jQwwUivwUxl6I/Mobile-Design-MLKit-Project?node-id=0%3A1" target="_blank">Figma Design</a></p>
                            </p>
                        </div>
                        <button type="button" class="top-0 h-1/5" onClick={handleClose}>
                            <FontAwesomeIcon icon={['fa', 'times-circle']} size="2x" className="m-1 text-red-700" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileProject2Modal;