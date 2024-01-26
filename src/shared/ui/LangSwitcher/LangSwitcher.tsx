import { useTranslation } from 'react-i18next';
import React from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { Button, ThemeButton } from '../button/button';

interface LangSwitherProps {
    className: string;
}

function LangSwither({ className }: LangSwitherProps) {
    const { t, i18n } = useTranslation();

    const togge = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'tr' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={togge}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
}

export default LangSwither;
