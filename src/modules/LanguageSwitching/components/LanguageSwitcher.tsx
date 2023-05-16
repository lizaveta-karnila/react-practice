import {LANGUAGES} from '../constants';
import {useTranslation} from 'react-i18next';

function LanguageSwitcher() {
    const {i18n, t} = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <select className="language-switcher" defaultValue={'ru'} onChange={onChangeLang}>
            {LANGUAGES.map(({code, label}) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    );
}

export default LanguageSwitcher;
