function UseFilterHookDescription() {
    return (
        <div className="description" style={{background: 'beige', padding: '4px 8px', marginBottom: 16}}>
            <h1>Filter list using useFilter <span style={{fontStyle: 'italic', background: 'yellow'}}>hook</span>😀
            </h1>
            <div style={{marginBottom: 24, fontSize: 12}}>
                Получился универсальный хук, который на вход получает список и поле по которому фильтровать, а
                отдает значение поля фильтрации, его сеттер и отфильтрованный список.
                <code style={{
                    display: 'block',
                    backgroundColor: '#eee',
                    border: '1px solid #999',
                    padding: 8,
                    margin: 6,
                    fontSize: 10
                }}>
                    const [titleFilterValue, setTitleFilterValue, itemsFilteredByTitle] = useFilter(posts, 'title');
                </code>
            </div>
        </div>
    );
}

export default UseFilterHookDescription;
