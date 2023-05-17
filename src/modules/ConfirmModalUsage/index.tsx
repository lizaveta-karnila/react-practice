import {useState} from 'react';
import {postsMock} from '../HOCvsHookFilter/commonMock/mockData';
import useConfirm from '../ConfirmModal/useConfirmModal.hook';

function ConfirmModalUsage() {
    const [posts, setPosts] = useState(postsMock.slice(0, 5));

    const confirm = useConfirm();

    async function deleteItem(itemId: number) {
        const choice = await confirm({
            title: 'Delete item',
            description: `Are you sure you want to delete item with id = ${itemId}?`,
            cancelBtnLabel: 'No',
            confirmBtnLabel: 'Yes',
        });

        if (choice) {
            setTimeout(() => {
                setPosts(posts.filter((item) => item.id !== itemId))
            }, 1000);
        }
    }

    return (
        <>
            <div className="description" style={{background: 'beige', padding: '4px 8px', marginBottom: 16}}>
                <h1>Confirm modal</h1>
            </div>

            <ul style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                {
                    posts.map((item) => (
                        <li key={item.id} style={{
                            display: 'inline-flex',
                            gap: 16,
                            justifyContent: 'space-between',
                            marginRight: 16,
                            border: '1px solid black',
                            padding: 8
                        }}>
                            <div className="item-id">{item.id}</div>
                            <div className="item-name">{item.title}</div>
                            <button onClick={() => deleteItem(item.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default ConfirmModalUsage;
