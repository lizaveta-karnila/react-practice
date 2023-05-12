import {useState} from 'react';
import List from './List';
import {mockListItems} from './api/mockData';
import Loader from '../UI/Loader';

function ListWithoutOptimizationExample() {
    const allItems = mockListItems;

    const [selectedItems, setSelectedItems] = useState([]);

    const toggleItem = (item) => {
        if(!selectedItems.includes(item))
            setSelectedItems([...selectedItems, item])
        else
            setSelectedItems(selectedItems.filter((current) => current !== item))
    };

    return (
        <div>
            <h1>List without optimization</h1>
            {
                allItems
                    ? <List allItems={allItems} selectedItems={selectedItems} toggleItem={toggleItem}/>
                    : <Loader/>
            }
        </div>
    );
}

export default ListWithoutOptimizationExample;