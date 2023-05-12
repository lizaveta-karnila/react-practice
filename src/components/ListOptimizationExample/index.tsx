import {useCallback, useEffect} from 'react';
import List from './List';
import {useSelector} from 'react-redux';
import {setAllListItems, toggleItemAction} from '../../store/actions/listOptimization.actions';
import {mockListItems} from './api/mockData';
import { allListItemsSelector, selectedListItemsSelector } from '../../store/selectors/listOptimization.selectors';
import {useAppDispatch} from '../../store/hooks';
import Loader from '../UI/Loader';

function ListOptimizationExample() {
    const dispatch = useAppDispatch();

    const allItems = useSelector(allListItemsSelector);
    const selectedItems = useSelector(selectedListItemsSelector);

    useEffect(() => {
        dispatch(setAllListItems(mockListItems));
    }, [dispatch])

    const toggleItem = useCallback((item) => {
        dispatch(toggleItemAction(item))
    }, [dispatch]);

    return (
        <div>
            <h1>List with optimization</h1>
            {
                allItems
                    ? <List allItems={allItems} selectedItems={selectedItems} toggleItem={toggleItem}/>
                    : <Loader/>
            }
        </div>
    );
}

export default ListOptimizationExample;