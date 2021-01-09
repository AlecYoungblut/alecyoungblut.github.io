import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import canadacitiesprojectcardimg from '../../assets/images/CanadaCities.png'

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
                                class="h-full w-full object-cover object-left-bottom"
                                src={canadacitiesprojectcardimg}
                                alt=""
                            />
                        </div>
                        <div class="w-2/3 m-2 mt-4">
                            <h1 class="text-gray-900 font-bold text-3xl">Parsing Data Formats - Canadian Cities</h1>
                            <div class='mt-3 mx-3 flex'>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#C#</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#.NET</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#JSON</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#XML</span>
                                <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#CSV</span>
                            </div>
                            <p class="text-gray-600 text-sm text-left p-4">
                                This .NET project was created to parsing from raw JSON/XML/CSV files and C# generics to display information for each city and province in Canada within a Windows form.
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