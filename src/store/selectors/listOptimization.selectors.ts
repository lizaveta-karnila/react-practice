import {createSelector} from 'reselect';
import {RootState} from '../rootReducer';

const state = ({ listOptimization }: RootState) => listOptimization;

export const allListItemsSelector = createSelector(state, ({ allItems }) => allItems);
export const selectedListItemsSelector = createSelector(state, ({ selectedItems }) => selectedItems);
