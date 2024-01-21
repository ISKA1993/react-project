import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useState } from 'react';
import { ThemeSwither } from 'shared/ui/ThemeSwitcher';
import LangSwither from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/button/button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}> Toggle </Button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwither className={cls.lang} />
            </div>
        </div>
    );
}
