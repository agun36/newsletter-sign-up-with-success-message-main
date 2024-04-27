import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ThankYou = () => {
    const [showModal, setShowModal] = useState(true);

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Thank you!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1 className="mb-5 font-size-large text-grey-000"> Thank you!</h1>
                <p className="mb-5 text-grey-001 opacity-75">A confirmation email has been sent to you.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="tomatoe" onClick={() => setShowModal(false)}
                    className='w-100 p-5 font-size-medium text-white-000'
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};