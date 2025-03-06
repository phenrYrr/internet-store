import classNames from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Typography } from 'antd';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Basket from './Basket/Basket';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export default function Header(props: HeaderProps) {
    const [count, setCount] = useState<number>(0);
    const { className } = props;

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <AppLink
                to={RoutePath.main}
                theme={AppLinkTheme.ACCENT}
            >
                <Typography.Title level={2}>STORE</Typography.Title>
            </AppLink>
            <Basket count={count} />
        </header>
    );
}
