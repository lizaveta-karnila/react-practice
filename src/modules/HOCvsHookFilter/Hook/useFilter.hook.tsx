import {useState} from 'react';

function useFilter<T>(list: T[], filterName: keyof T) {
    const [filterValue, setFilterValue] = useState('');

    const availableListItems = filterValue
        ? list.filter((item) => item[filterName].includes(filterValue))
        : list;

    return [filterValue, setFilterValue, availableListItems];
}

export default useFilter;
