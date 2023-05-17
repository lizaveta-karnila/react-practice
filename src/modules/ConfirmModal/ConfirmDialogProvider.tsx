import {useCallback, useRef, useState} from 'react'
import ConfirmModal, {IConfirmModalProps} from './ConfirmModalComponent';
import {ConfirmDialogContext} from './ConfirmModal.context';

function ConfirmDialogProvider({children}) {
    const [state, setState] = useState<IConfirmModalProps>({isOpened: false});
    const fn = useRef<(val: boolean) => void>();

    const confirm = useCallback<(data: IConfirmModalProps) => void>((data) => {
        return new Promise((resolve) => {
            setState({...data, isOpened: true});

            fn.current = (choice) => {
                resolve(choice);
                setState({...data, isOpened: false});
            }
        })
    }, [setState]);

    return (
        <ConfirmDialogContext.Provider value={confirm}>
            {children}
            <ConfirmModal
                {...state}
                onClose={() => fn.current ? fn.current(false) : null}
                onConfirm={() => fn.current ? fn.current(true) : null}
            />
        </ConfirmDialogContext.Provider>
    )
}

export default ConfirmDialogProvider;
