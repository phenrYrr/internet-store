import classNames from 'shared/lib/classNames/classNames';
import cls from './BasketPage.module.scss';

interface BasketPage {
    className?: string;
}

export default function BasketPage(props: BasketPage) {
    const { className } = props;

    return (
        <div className={classNames(cls.BasketPage, {}, [className])}>
            BasketPage
        </div>
    );
}
