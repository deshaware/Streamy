import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" 
            // onClick={() => history.push('/')}
            onClick={props.onDismiss}
            >
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header" style={{fontWeight:"bold"}}>
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;