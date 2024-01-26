import React from 'react';
import WhiteIcons from '../../../assets/icons/WhiteIcons.svg';
import DarkIcons from '../../../assets/icons/DarkIcons.svg';
import { classNames } from '../../../lib/classNames/classNames';
import { ThemeButton, Button } from '../../../../shared/ui/button/button';
import { Theme, useTheme } from '../../../../app/providers/ThemeProvider/index';

interface ThemeSwitherProps {
    className: string;
}

function ThemeSwither({ className }: ThemeSwitherProps) {
    const { toggleTheme, theme } = useTheme();
    return (

        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcons /> : <WhiteIcons />}
        </Button>
    );
}

export default ThemeSwither;
