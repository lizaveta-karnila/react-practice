import {createContext} from 'react';
import {IConfirmModalProps} from './ConfirmModalComponent';

export const ConfirmDialogContext = createContext<(val: IConfirmModalProps) => void | null>(null);
