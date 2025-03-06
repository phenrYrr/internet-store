import classNames from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import cls from './Header.module.scss';
import Basket from './Basket/Basket';

interface HeaderProps {
    className?: string;
}

export default function Header(props: HeaderProps) {
    const [count, setCount] = useState<number>(0);
    const { className } = props;

    const counter = () => {
        setCount(() => count + 1);
    };

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <button onClick={counter}>click</button>
            <Basket count={count} />
        </header>
    );
}
