import '../static/css/drawer.css';

const Drawer = ({ isOpen, close, children }) => {
    return (
        <div class={`overlay ${isOpen ? 'open' : ''}`} onClick={close}>
            <div class={`drawer ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Drawer;
