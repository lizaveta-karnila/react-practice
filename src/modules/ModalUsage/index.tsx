import {useState} from 'react';
import Modal from '../../components/UI/Modal';

function ModalUsage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="description" style={{background: 'beige', padding: '4px 8px', marginBottom: 16}}>
                <h1>Modal</h1>
            </div>
            <button onClick={() => setIsModalOpen(true)}>open modal</button>
            <Modal
                isOpened={isModalOpen}
                title="Simple modal title"
                onClose={() => setIsModalOpen(false)}
            >
                <div>form content</div>
            </Modal>
        </>
    );
}

export default ModalUsage;
