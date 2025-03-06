import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header/ui/Header';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
    id?: string;
}

export default function MainPage(props: MainPageProps) {
    const { className } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header className={cls.Header} />
            <div>MainPage</div>
        </div>
    );
}
