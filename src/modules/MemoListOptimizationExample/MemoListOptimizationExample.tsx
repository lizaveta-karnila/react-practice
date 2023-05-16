import {useCallback, useEffect} from 'react';
import List from './List';
import {useSelector} from 'react-redux';
import {setAllListItems, toggleItemAction} from '../../store/actions/listOptimization.actions';
import {mockListItems} from './api/mockData';
import {allListItemsSelector, selectedListItemsSelector} from '../../store/selectors/listOptimization.selectors';
import {useAppDispatch} from '../../store/hooks';
import Loader from '../../components/UI/Loader';
import {IListItem} from './interfaces/list-item';

function MemoListOptimizationExample() {
    const dispatch = useAppDispatch();

    const allItems = useSelector(allListItemsSelector);
    const selectedItems = useSelector(selectedListItemsSelector);

    useEffect(() => {
        dispatch(setAllListItems(mockListItems));
    }, [dispatch])

    const toggleItem = useCallback((item: IListItem) => {
        dispatch(toggleItemAction(item))
    }, [dispatch]);

    return (
        <div>
            <div className="description" style={{background: 'beige', padding: '4px 8px', marginBottom: 16}}>
                <h1>Optimized list (by <span style={{fontStyle: 'italic', background: 'yellow'}}>React.memo</span>)😀</h1>
            </div>
            <div className="list-wrapper" style={{height: 300, overflow: 'auto'}}>
                {
                    allItems
                        ? <List allItems={allItems} selectedItems={selectedItems} toggleItem={toggleItem}/>
                        : <Loader/>
                }
            </div>
        </div>
    );
}

export default MemoListOptimizationExample;