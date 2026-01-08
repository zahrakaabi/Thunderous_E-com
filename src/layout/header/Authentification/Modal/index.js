/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 MODAL                */
/* ------------------------------------ */
const Modal = ({ openModal, toggle, children }) => openModal ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" onClick={toggle} />
    <div className="modal">
        <button type="button" 
                className="modal-close-button" 
                data-dismiss="modal" 
                aria-label="Close" 
                onClick={toggle}>
            <span aria-hidden="true">&times;</span>
        </button>
        {children}
    </div>
  </React.Fragment>, document.body
) : <></>;

export default Modal;