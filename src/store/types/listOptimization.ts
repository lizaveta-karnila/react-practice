import {IListItem} from '../../components/ListOptimizationExample/interfaces/list-item';

export interface IListOptimizationState {
    allItems: IListItem[] | null;
    selectedItems: IListItem[];
}

export enum EListOptimizationActions {
    SetAllItems = 'SET_ALL_LIST_ITEMS',
    ToggleItem = 'TOGGLE_ITEM',
}

export interface ISetAllItemsAction {
    type: EListOptimizationActions.SetAllItems,
    payload: IListItem[] | null,
}

export interface IToggleItemAction {
    type: EListOptimizationActions.ToggleItem,
    payload: IListItem,
}

export type TListOptimizationActions = ISetAllItemsAction | IToggleItemAction;
