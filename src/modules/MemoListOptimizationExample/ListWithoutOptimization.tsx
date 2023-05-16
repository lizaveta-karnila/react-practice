import {useState} from 'react';
import List from './List';
import {mockListItems} from './api/mockData';
import Loader from '../../components/UI/Loader';

function ListWithoutOptimizationExample() {
    const allItems = mockListItems;

    const [selectedItems, setSelectedItems] = useState([]);

    const toggleItem = (item) => {
        if (!selectedItems.includes(item))
            setSelectedItems([...selectedItems, item])
        else
            setSelectedItems(selectedItems.filter((current) => current !== item))
    };

    return (
        <div>
            <div className="description" style={{background: 'beige', padding: '4px 8px', marginBottom: 16}}>
                <h1>List without optimization 🙁</h1>
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

export default ListWithoutOptimizationExample;