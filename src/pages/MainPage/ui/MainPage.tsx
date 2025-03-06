import classNames from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import Header from 'widgets/Header/ui/Header';
import Basket from 'widgets/Header/ui/Basket/Basket';

interface MainPageProps {
    className?: string;
}

export default function MainPage(props: MainPageProps) {
    const { className } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header className={cls.Header} />
        </div>
    );
}
