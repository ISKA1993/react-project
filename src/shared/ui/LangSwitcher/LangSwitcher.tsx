import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { Button, ThemeButton } from '../button/button';

interface LangSwitherProps {
    className?: string;
}

export default function LangSwither({ className }: LangSwitherProps) {
    const { t, i18n } = useTranslation();

    const togge = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'tr' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwither, {}, [className])}
            onClick={togge}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
}
