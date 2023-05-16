import {useState} from 'react';

function withFilter(Component) {
    return function (props) {
        const {posts, ...otherProps} = props;

        const [titleFilterValue, setTitleFilterValue] = useState('');
        const [bodyFilterValue, setBodyFilterValue] = useState('');
        const [myFilterFieldFilterValue, setMyFilterFieldFilterValue] = useState('');

        const availableItems = titleFilterValue
            ? posts.filter((item) => item.title.includes(titleFilterValue))
            : posts;
        const availableItems2 = bodyFilterValue
            ? posts.filter((item) => item.body.includes(bodyFilterValue))
            : availableItems;
        const availableItems3 = myFilterFieldFilterValue
            ? posts.filter((item) => item.myFilterField.includes(myFilterFieldFilterValue))
            : availableItems2;

        return (
            <Component
                posts={availableItems3}
                titleFilterValue={titleFilterValue}
                setTitleFilterValue={setTitleFilterValue}
                bodyFilterValue={bodyFilterValue}
                setBodyFilterValue={setBodyFilterValue}
                myFilterFieldFilterValue={myFilterFieldFilterValue}
                setMyFilterFieldFilterValue={setMyFilterFieldFilterValue}
                {...otherProps}
            />
        )
    }
}

export default withFilter;
