import './modal.css';
import mobileprojectcardimg from '../../assets/images/MobileProject.png'

const MobileProject2Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div class="p-6">
                    <div class="flex bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        <div class="bg-cover">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/PVWGOjtIWP0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/RsDBoP2yZ14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div class="w-2/3 m-2">
                            <h1 class="text-gray-900 font-bold text-3xl">Artistic Style Transfer with TensorFlow</h1>
                            <div class='mt-3 mx-3 flex flex-wrap'>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#AndroidStudio</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Kotlin</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Figma</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#MLKit</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#TensorFlow</span>
                            </div>
                            <p class="text-gray-600 text-sm text-left p-4">
                                This project was an Android application that was created and designed to demonstrate artistic style transfer between a pre-set number of "style" photos and either a new photo taken during execution or one selected from the gallery. This project was created to suit the project requirements for INFO 5126 (Mobile Development) of Fanshawe’s Computer Programmer Analyst course. This project took advantage of a library that is utilized by MLKit called TensorFlow to create pastiches (a work of visual art, literature, theatre or music that imitates the style or character of the work of one or more artists) through the concept of Artistic Style Transfer by utilizing the models that are contained within the TensorFlow library.
                            </p>
                            <button type="button" class="float px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileProject2Modal;