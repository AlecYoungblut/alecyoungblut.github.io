import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import spacyprojectcardimg1 from '../../assets/images/SpacyProject2.png';
import spacyprojectcardimg2 from '../../assets/images/SpacyProject.png';

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
                            <img
                                class="h-1/2 w-full object-cover object-left-bottom"
                                src={spacyprojectcardimg1}
                                alt=""
                            />
                            <img
                                class="h-1/2 w-full object-cover object-left-bottom pt-1"
                                src={spacyprojectcardimg2}
                                alt=""
                            />
                        </div>
                        <div class="w-2/3 m-2 mt-4">
                            <h1 class="text-gray-900 font-bold text-3xl">Natural Language Processing with spaCy</h1>
                            <div class='mt-3 mx-3 flex'>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#Python</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#spaCy</span>
                            </div>
                            <p class="text-gray-600 text-sm text-left p-4">
                                This project was a Python command line application that was created and designed to utilizes NLP processing from the spaCy library to extract some free-form information from a series of (prefiltered) brokerage purchase requests to purchase for n amount from m number of companies. This data is then outputted to console in an easy to decipher form.
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