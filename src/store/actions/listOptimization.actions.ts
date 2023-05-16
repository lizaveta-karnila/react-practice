import {EListOptimizationActions, ISetAllItemsAction, IToggleItemAction} from '../types/listOptimization';
import {IListItem} from '../../modules/MemoListOptimizationExample/interfaces/list-item';

export function setAllListItems(payload: IListItem[] | null): ISetAllItemsAction {
    return {
        type: EListOptimizationActions.SetAllItems,
        payload: payload,
    }
}

export function toggleItemAction(payload: IListItem): IToggleItemAction {
    return {
        type: EListOptimizationActions.ToggleItem,
        payload: payload,
    }
}
