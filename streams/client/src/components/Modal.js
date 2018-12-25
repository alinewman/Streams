import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
           <div className="header">{props.title}</div>
           <div  onClick={(e)=>e.stopPropagation()}  className="content">
           <h2>{props.title}</h2>
           <br></br>
           {props.content}
            </div>
            <br></br>
            <div className="actions">
                {props.actions}
            </div>
        </div>,
        document.querySelector('#modal')
    );
}
export default Modal;