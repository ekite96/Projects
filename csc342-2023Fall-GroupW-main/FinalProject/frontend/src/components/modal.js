import '../static/css/modal.css';

const Modal = ({ isOpen, close, children }) => {
    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={close}>
            <div className="modal-container">
                <div className={`bg-light modal-pane`} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
