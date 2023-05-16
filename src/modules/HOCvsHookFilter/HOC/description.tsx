function WithFilterHOCDescription() {
    return (
        <div className="description" style={{background: 'beige', padding: '4px 8px', marginBottom: 16}}>
            <h1>Filter list using withFilter <span
                style={{fontStyle: 'italic', background: 'yellow'}}>HOC</span>😐</h1>
            <div style={{marginBottom: 24, fontSize: 12}}>
                Нельзя заиспользовать HOC компонент несколько раз для одного и того же компонента, вот так:
                <code style={{
                    display: 'block',
                    backgroundColor: '#eee',
                    border: '1px solid #999',
                    padding: 8,
                    margin: 6,
                    fontSize: 10
                }}>
                    export default withFilter(withFilter(withFilter(WithFilterHOCUsageExample, 'title'), 'body'),
                    myFilterField);
                </code>
                Вместо этого пришлось захардкодить названия полей фильтрации в HOC и использовать его так (получая
                необходимые значения фильтров и их сеттеры через пропсы):
                <code style={{
                    display: 'block',
                    backgroundColor: '#eee',
                    border: '1px solid #999',
                    padding: 8,
                    margin: 6,
                    fontSize: 10
                }}>
                    function WithFilterHOCUsageExample(<br/>
                    {'{'}<br/>
                    posts,<br/>
                    titleFilterValue,<br/>
                    setTitleFilterValue,<br/>
                    bodyFilterValue,<br/>
                    setBodyFilterValue,<br/>
                    myFilterFieldFilterValue,<br/>
                    setMyFilterFieldFilterValue<br/>
                    {'}'}: IProp)<br/>
                    ...<br/>
                    export default withFilter(WithFilterHOCUsageExample);
                </code>
                То есть HOC можно будет переиспользовать только на таких списках items, item которых будет содержать
                все или некоторые из конкретно этих полей. То есть HOC будет содержать лишнюю инфу и логику. Хотя...
                Может это и не плохо? За то все фильтры в одном месте будут храниться.
            </div>
        </div>
    );
}

export default WithFilterHOCDescription;
