import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import WhiteIcons from 'shared/assets/icons/WhiteIcons.svg';
import DarkIcons from 'shared/assets/icons/DarkIcons.svg';
import { ThemeButton, Button } from 'shared/ui/button/button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitherProps {
    className?: string;
}

export default function ThemeSwither({ className }: ThemeSwitherProps) {
    const { toggleTheme, theme } = useTheme();
    return (

        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwither, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcons /> : <WhiteIcons />}
        </Button>
    );
}
