import {EListOptimizationActions, IListOptimizationState, TListOptimizationActions} from '../types/listOptimization';

const initState: IListOptimizationState = {
    allItems: null,
    selectedItems: [],
}

const initialState = { ...initState };

export const listOptimizationReducer = (state = initialState, action: TListOptimizationActions): IListOptimizationState => {
    switch (action.type) {
        case EListOptimizationActions.SetAllItems:
            return {...state, allItems: action.payload};
        case EListOptimizationActions.ToggleItem:
            return {
                ...state,
                selectedItems: !state.selectedItems.includes(action.payload)
                    ? [...state.selectedItems, action.payload]
                    : state.selectedItems.filter((current) => current !== action.payload)
            }
        default:
            return state;
    }
}
