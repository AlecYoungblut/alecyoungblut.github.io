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
                        <div class="bg-cover pt-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/feU7wKaeQDY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="w-2/3 m-2 mt-4">
                            <h1 class="text-gray-900 font-bold text-3xl">Yeomans Fitness and Personal Training</h1>
                            <div class='mt-3 mx-3 flex'>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#React</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Tailwind</span>
                            </div>
                            <p class="text-gray-600 text-sm text-left p-4">
                                This website is a responsive React single-page-application (SPA) with Tailwind CSS created for a friend's upcoming solo fitness career. The pandemic has currently restricted client access and as such there are still placeholders for text and images.
                            </p>
                            <p class="text-blue-700 underline text-sm text-left p-4">
                                <p className="hover:text-blue-300"><a href="https://github.com/AlecYoungblut/fitness-website" target="_blank">Github Repository</a></p>
                                <p className="hover:text-blue-300"><a href="https://www.youtube.com/watch?v=feU7wKaeQDY&feature=youtu.be" target="_blank">YouTube Demo</a></p>
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