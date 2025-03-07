import { Button, Card, Image, Typography } from 'antd';
import classNames from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Product/model/types/product';
import cls from './ProductItem.module.scss';
import { useState } from 'react';

interface ProductItemProps {
    className?: string;
    product: Product;
}

export default function ProductItem(props: ProductItemProps) {
    const { className, product } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Card
                className={classNames(cls.Card, {}, [className])}
                style={{ width: 275 }}
            >
                <Image
                    src={product?.image}
                    alt={product?.name}
                />
                <Typography.Title level={2}>{product?.name}</Typography.Title>
                <Typography.Text>{product?.price} </Typography.Text>
                <Button
                    style={{ marginLeft: 30 }}
                    color="danger"
                    variant="filled"
                >
                    В КОРЗИНУ
                </Button>
            </Card>
        </div>
    );
}
