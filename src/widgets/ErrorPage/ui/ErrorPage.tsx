import classNames from 'shared/lib/classNames/classNames';
import { Button } from 'antd';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames('', {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <Button
                type="primary"
                onClick={reloadPage}
            >
                Обновить страницу
            </Button>
        </div>
    );
};
