import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from 'shared/ThemeSwitcher';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (

        <div className={classNames(cls.Navbar,{},[])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLinks}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};

export default Navbar;