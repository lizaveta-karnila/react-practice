import { IListItem } from '../../interfaces/list-item';
import { expensiveOperation } from '../../helpers/ExpensiveOperation';
import { memo } from 'react';

interface IProps {
    item: IListItem,
    selected: boolean,
    onClick: (item: IListItem) => void,
}

const MemoizedListItem = memo(function ListItem({item, selected, onClick}: IProps) {
    expensiveOperation(selected);

    return (
        <li
            style={selected ? { textDecoration: "line-through" } : undefined}
            onClick={() => onClick(item)}
        >
            {item.name}
        </li>
    );
})

export default MemoizedListItem;
