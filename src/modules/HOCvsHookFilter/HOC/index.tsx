import withFilter from './withFilter.HOC';
import {IPost} from '../commonMock/post.interface';
import WithFilterHOCDescription from './description';

interface IProp {
    posts: IPost[],
    titleFilterValue: string,
    setTitleFilterValue: (value: string) => void,
    bodyFilterValue: string,
    setBodyFilterValue: (value: string) => void,
    myFilterFieldFilterValue: string,
    setMyFilterFieldFilterValue: (value: string) => void,
}

function WithFilterHOCUsageExample(
    {
        posts,
        titleFilterValue,
        setTitleFilterValue,
        bodyFilterValue,
        setBodyFilterValue,
        myFilterFieldFilterValue,
        setMyFilterFieldFilterValue
    }: IProp) {

    return (
        <div className="post-list-with-filters">
            <WithFilterHOCDescription/>

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

            <div className="counter">Length: {posts.length}</div>
            <div className="post-list" style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
                {
                    posts.map((post) => (
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

export default withFilter(WithFilterHOCUsageExample);
