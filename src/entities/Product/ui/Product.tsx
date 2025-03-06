import { ReactNode, memo, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Skeleton, Typography, Avatar } from 'antd';
import {
    getProductData,
    getProductError,
    getProductIsLoading,
} from '../model/selectors/getProductData';
import { productReducer } from '../model/slice/productSlice';
import { productFetch } from '../model/services/productFetch';
import cls from './Product.module.scss';

interface ProductProps {
    children?: ReactNode;
    className?: string;
    id: string;
}

const reducer: ReducersList = {
    product: productReducer,
};

export const Product = memo((props: ProductProps) => {
    const { className, id, children } = props;
    const dispatch = useAppDispatch();
    const data = useSelector(getProductData);
    const isLoading = useSelector(getProductIsLoading);
    const error = useSelector(getProductError);

    useEffect(() => {
        dispatch(productFetch(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    active
                    style={{ width: 100 }}
                />
                <Skeleton
                    active
                    style={{ width: 100 }}
                />

                <Skeleton
                    active
                    style={{ width: 100 }}
                />

                <Skeleton
                    active
                    style={{ width: 100 }}
                />
            </>
        );
    } else if (error) {
        content = (
            <Typography.Title level={3}>
                Произошла ошибка при загрузке продуктов.
            </Typography.Title>
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={data?.image}
                        className={cls.avatar}
                    />
                </div>
                <Typography.Text
                    className={cls.title}
                    title={data?.name}
                />
                <Typography.Text title={String(data?.price)} />
            </>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducer}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>{children}</div>
        </DynamicModuleLoader>
    );
});
