import {Suspense} from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
// импортировать в main.tsx, если переключение между языками нужны во всем приложении
import './i18n';
import ComponentWithSomeText from './components/ComponentWithSomeText';
import LoadingAppDataLoader from './components/LoadingAppDataLoader';

function LanguageSwitchingExample() {
    return (
        <>
            <div className="description" style={{background: 'beige', padding: '4px 8px', marginBottom: 16}}>
                <h1>Language switching example</h1>
            </div>
            {/*обернуть в Suspense все, что в App, если переключение между языками нужны во всем приложении*/}
            {/*Компонент Suspense приостанавливает приложение до тех пор, пока оно не будет готово, а в свойстве fallback отображается то, что отображается пользователю в ожидании готовности приложения.*/}
            <Suspense fallback={<LoadingAppDataLoader/>}>
                <div>
                    <LanguageSwitcher/>
                    <ComponentWithSomeText/>
                </div>
            </Suspense>
        </>
    );
}

export default LanguageSwitchingExample;
