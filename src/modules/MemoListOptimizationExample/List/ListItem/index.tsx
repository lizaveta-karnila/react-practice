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
        <li>
            <label>
                <input type='checkbox' checked={selected} onChange={() => onClick(item)} />
                <span>{item.name}</span>
            </label>
        </li>
    );
})

export default MemoizedListItem;
