import {useContext} from 'react';
import {ConfirmDialogContext} from './ConfirmModal.context';

function useConfirm() {
    return useContext(ConfirmDialogContext);
}

export default useConfirm;
