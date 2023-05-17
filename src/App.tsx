import {store} from './store/store';
import {Provider} from 'react-redux';
import MemoListOptimizationExample from './modules/MemoListOptimizationExample/MemoListOptimizationExample';
import ListWithoutOptimizationExample from './modules/MemoListOptimizationExample/ListWithoutOptimization';
import DebounceHookUsageExample from './modules/HooksUsageExample/hooks/Debounce/usageExample';
import CopyToClipboardHookUsageExample from './modules/HooksUsageExample/hooks/CopytoClipboard/usageExample';
import UseFilterHookUsageExample from './modules/HOCvsHookFilter/Hook';
import WithFilterHOCUsageExample from './modules/HOCvsHookFilter/HOC';
import {postsMock} from './modules/HOCvsHookFilter/commonMock/mockData';
import LanguageSwitchingExample from './modules/LanguageSwitching';
import ModalUsage from './modules/ModalUsage';

function App() {
    const posts = postsMock;
    return (
        <Provider store={store}>
            <div className="memo" style={{display: 'flex', gap: 24}}>
                <div style={{flex: '1 1'}}>
                    <MemoListOptimizationExample/>
                </div>
                <div style={{flex: '1 1'}}>
                    <ListWithoutOptimizationExample/>
                </div>
            </div>
            <div className="hooks">
                <DebounceHookUsageExample/>
                <CopyToClipboardHookUsageExample/>
            </div>
            <div className="HOC-vs-hook-filter" style={{display: 'flex', gap: 24}}>
                <div style={{flex: '1 1'}}>
                    <UseFilterHookUsageExample posts={[...posts]}/>
                </div>
                <div style={{flex: '1 1'}}>
                    <WithFilterHOCUsageExample posts={[...posts]}/>
                </div>
            </div>
            <div className="i18n">
                {/*Делала по гайду: https://dev.to/franklin030601/building-a-multi-language-app-with-react-js-2och*/}
                <LanguageSwitchingExample/>
            </div>
            <div className="components">
                <ModalUsage/>
            </div>
        </Provider>
    )
}

export default App
