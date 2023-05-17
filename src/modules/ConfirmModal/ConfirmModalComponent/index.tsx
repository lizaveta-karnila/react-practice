import * as React from 'react';
import './ConfirmModal.scss';
import {IconContext} from 'react-icons';
import {RxCross1} from 'react-icons/all';

export interface IConfirmModalProps {
    isOpened: boolean;
    title?: string,
    description?: string,
    cancelBtnLabel?: string,
    confirmBtnLabel?: string,
    onClose: () => void,
    onConfirm: () => void,
}

function ConfirmModal({
                          isOpened,
                          title,
                          description,
                          cancelBtnLabel,
                          confirmBtnLabel,
                          onClose,
                          onConfirm
                      }: IConfirmModalProps) {
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
                <div className="modal-description">
                    {description}
                </div>
                <div className="modal-action-buttons">
                    {/*TODO: реализовать кастомный элемент кнопки с атрибутами primary и secondary, отвечающие за стиль - перенести стили отсюда*/}
                    <button className="secondary-button" onClick={onClose}>{cancelBtnLabel || 'cancel'}</button>
                    <button className="error-button" onClick={onConfirm}>{confirmBtnLabel || 'ok'}</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
