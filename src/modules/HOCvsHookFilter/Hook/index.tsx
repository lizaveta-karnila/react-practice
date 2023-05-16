import {memo, useMemo} from 'react';
import useFilter from './useFilter.hook';
import {IPost} from '../commonMock/post.interface';
import UseFilterHookDescription from './description';

interface IProp {
    posts: IPost[],
}

const getCommonArraysElements = (arr1, arr2) => arr1.filter(element => arr2.includes(element));

function UseFilterHookUsageExample({posts}: IProp) {
    const [titleFilterValue, setTitleFilterValue, itemsFilteredByTitle] = useFilter(posts, 'title');
    const [bodyFilterValue, setBodyFilterValue, itemsFilteredByBody] = useFilter(posts, 'body');
    const [myFilterFieldFilterValue, setMyFilterFieldFilterValue, itemsFilteredByMyFilterField] = useFilter(posts, 'myFilterField');

    const availableItems = useMemo(() => {
        return getCommonArraysElements(getCommonArraysElements(itemsFilteredByTitle, itemsFilteredByBody), itemsFilteredByMyFilterField);
    }, [itemsFilteredByTitle, itemsFilteredByBody, itemsFilteredByMyFilterField])

    return (
        <div className="post-list-with-filters">
            <UseFilterHookDescription/>

            <div className="filter-inputs" style={{display: 'flex', gap: 16}}>
                <label>
                    title:
                    <input value={titleFilterValue} onChange={(e) => setTitleFilterValue(e.target.value)}/>
                </label>
                <label>
                    body:
                    <input value={bodyFilterValue} onChange={(e) => setBodyFilterValue(e.target.value)}/>
                </label>
                <label>
                    myOwnField:
                    <input value={myFilterFieldFilterValue}
                           onChange={(e) => setMyFilterFieldFilterValue(e.target.value)}/>
                </label>
            </div>

            <div className="counter">Length: {availableItems.length}</div>
            <div className="post-list" style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
                {
                    availableItems.map((post) => (
                        <div style={{padding: 8, backgroundColor: '#ddd', borderRadius: 8}} key={post.id}>
                            <div style={{fontWeight: 'bold', fontSize: 18}}>Id: {post.id}</div>
                            <div>Title: {post.title}</div>
                            <div>Body: {post.body}</div>
                            <div>MyFilterField: {post.myFilterField}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default memo(UseFilterHookUsageExample);
