import Modal from 'react-modal';
import './MyModal.css';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

const MyModal = ({ isOpen, handleOpenClose, modalTitle, modalContent, isCheckout, handleOrderSave, inputChange, onInputChange, orderCreationState }) =>
(
    <Modal
        ariaHideApp={false}
        style={modalStyles}
        isOpen={isOpen}
        onRequestClose={handleOpenClose}
    >
        <div className='modal_wrapper'>
            <div className='modal_content'>
                <h2>{modalTitle}</h2>
                {modalContent}
                {isCheckout && orderCreationState && (
                    <div className='modal_form'>
                        <label>Name
                            <input type="text" name='name' className='input_name' onChange={inputChange} />
                        </label>

                        <label>Phone
                            <input type="text" name='phone' className='input_phone' onChange={inputChange} />
                        </label>

                        <label>Address
                            <input type="text" name='address' className='input_address' onChange={inputChange} />
                        </label>
                        <label className='label_check'>QuickDelivery
                            <input type='checkbox' name='delivery' className='delivery checked_inp' onChange={onInputChange} />
                        </label>
                    </div>
                )}
            </div>
            {orderCreationState && (
                <div className="modal_controls">
                <button className="btn" onClick={handleOrderSave}>
                    Confim
                </button>
                <button className="btn" onClick={handleOpenClose}>
                    Close
                </button>
                </div>
            )}
        </div>
    </Modal>

)


export default MyModal;