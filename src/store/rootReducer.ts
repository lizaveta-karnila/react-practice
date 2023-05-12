import {combineReducers} from '@reduxjs/toolkit';
import {listOptimizationReducer} from './reducers/listOptimization.reducer';

const rootReducer = combineReducers({
    listOptimization: listOptimizationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
