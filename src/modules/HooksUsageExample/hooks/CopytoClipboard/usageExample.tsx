import useCopyToClipboard from './copyToClipboard.hook';

export default function CopyToClipboardHookUsageExample() {
    const [copiedValue, setCopiedValue] = useCopyToClipboard();

    return (
        <>
            <div className="description" style={{background: 'beige', padding: '4px 8px', marginBottom: 16}}>
                <h1>useCopyToClipboard hook usage</h1>
            </div>
            <div style={{display: 'flex'}}>
                <button onClick={(e) => e.currentTarget.textContent && setCopiedValue(e.currentTarget.textContent)}>A
                </button>
                <button onClick={() => setCopiedValue('B')}>B</button>
                <button onClick={() => setCopiedValue('D')}>D</button>
            </div>
            <p>Copied value: {copiedValue ?? 'Nothing is copied yet!'}</p>
        </>
    )
}
