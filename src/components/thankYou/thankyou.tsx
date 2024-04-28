import { useState } from 'react';
import iconList from '../../assets/images/icon-list.svg'
import { initialValuesProps } from '../utils/schemas';
import './styles.scss'

export const ThankYou = ({ initialValues }: { initialValues: initialValuesProps }) => {
    const [showModal, setShowModal] = useState(true);

    if (!showModal) {
        return null;
    }

    return (
        <div className='modals'>
            <div className='modal-container'>
                <div className='modal-content'>
                    <div className='border-0'>
                        <div>
                            <img src={iconList} alt="icon list" className='img-fluid' />
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-5 font-size-large text-grey-000"> Thanks for subscribing!</h1>
                        <p className="mb-5 text-grey-002 ">A confirmation email has been sent to <span className='text-grey-001'>{initialValues.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                    </div>
                    <div className='border-0'>
                        <button onClick={() => setShowModal(false)}
                            className='w-100 p-5 font-size-medium text-white-000 button-hover'
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};