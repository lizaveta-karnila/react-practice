import './Modal.scss';
import * as React from 'react';
import {PropsWithChildren} from 'react';
import {IconContext} from 'react-icons';
import {RxCross1} from 'react-icons/rx';

interface IProps {
    isOpened: boolean;
    onClose: () => void,
    title?: string,
}

function Modal({isOpened, title, children, onClose}: PropsWithChildren<IProps>) {
    return (
        <div className={`overlay ${isOpened ? 'is-opened' : ''}`} onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-header-title">{title}</div>
                    <div className="close-button-wrapper" onClick={onClose}>
                        <IconContext.Provider value={{className: 'close-button'}}>
                            <RxCross1/>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;
