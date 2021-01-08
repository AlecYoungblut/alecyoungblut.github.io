import './modal.css';
import mobileprojectcardimg from '../../assets/images/MobileProject.png'

const FitnessWebsiteModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div class="p-6">
                    <div class="flex bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        <div class="bg-cover">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/feU7wKaeQDY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div class="w-2/3 m-2">
                            <h1 class="text-gray-900 font-bold text-3xl">Yeomans Fitness and Personal Training</h1>
                            <div class='mt-3 mx-3 flex flex-wrap'>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#React</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#Tailwind</span>
                            </div>
                            <p class="text-gray-600 text-sm text-left p-4">
                                This website is a responsive React single-page-application (SPA) with Tailwind CSS created for a friend's upcoming solo fitness career. The pandemic has currently restricted client access and as such there are still placeholders for text and images.
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

export default FitnessWebsiteModal;