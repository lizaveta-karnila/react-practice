import {useTranslation} from 'react-i18next';

function ComponentWithSomeText() {
    const {i18n, t} = useTranslation();

    const someTextVariable = 'Иванов Иван Иванович';

    return (
        <div>
            <h3 className='title'>{t('title')}</h3>
            <div className='text' style={{fontSize: 18}}>{t('text')}</div>
            <br/>
            <div>{t('user', {name: someTextVariable})}</div>
        </div>
    );
}

export default ComponentWithSomeText;
