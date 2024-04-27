import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import iconList from '../../assets/images/icon-list.svg'
import { initialValuesProps } from '../utils/schemas';

export const ThankYou = ({ initialValues }: { initialValues: initialValuesProps }) => {
    const [showModal, setShowModal] = useState(true);

    return (
        <Modal className='modals ' show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton className='border-0'>
                <Modal.Title>
                    <img src={iconList} alt="icon list" className='img-fluid w-100' />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1 className="mb-5 font-size-large text-grey-000"> Thank you!</h1>
                <p className="mb-5 text-grey-001 opacity-75">A confirmation email has been sent to {initialValues.email}. Please open it and click the button inside to confirm your subscription.</p>
            </Modal.Body>
            <Modal.Footer className='border-0'>
                <Button variant="tomatoe" onClick={() => setShowModal(false)}
                    className='w-100 p-5 font-size-medium text-white-000'
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};