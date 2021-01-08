import './modal.css';
import mobileprojectcardimg from '../../assets/images/MobileProject.png'

const MobileProject1Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div class="p-6">
                    <div class="flex bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        <div class="bg-cover">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/PVWGOjtIWP0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div class="w-2/3 m-2">
                            <h1 class="text-gray-900 font-bold text-3xl">Caffeine Dosage Tracker</h1>
                            <div class='mt-3 mx-3 flex flex-wrap'>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#AndroidStudio</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Java</span>
                            </div>
                            <p class="text-gray-600 text-sm text-left p-4">
                                This project was an Android application designed to track caffeine intake over time and then display that information in an interactable (click/zoom) graph visualization of dosage over time. This project was created to suit the project requirements for INFO 3136 (Mobile Development) of Fanshawe’s Computer Programmer Analyst course.
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

export default MobileProject1Modal;