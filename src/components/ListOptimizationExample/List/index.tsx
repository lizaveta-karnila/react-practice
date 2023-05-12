import { IListItem } from '../interfaces/list-item';
import { useCallback } from 'react';
import MemoizedListItem from "./ListItem";

interface IProps {
    allItems: IListItem[],
    selectedItems: IListItem[],
    toggleItem: (item: IListItem) => void,
}

function List({allItems, selectedItems, toggleItem}: IProps) {
    const handleClick = useCallback((item) => {
        toggleItem(item);
    }, [toggleItem])

    return (
        <ul>
            {allItems.map((item) => (
                <MemoizedListItem
                    key={item.id}
                    item={item}
                    selected={selectedItems.includes(item)}
                    onClick={handleClick}
                />
            ))}
        </ul>
    );
}

export default List;
