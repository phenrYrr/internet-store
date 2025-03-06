import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { BasketPage } from 'pages/BasketPage';

export enum AppRoutes {
    MAIN = 'main',
    BASKET = 'basket',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/catalog',
    [AppRoutes.BASKET]: '/basket',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

    [AppRoutes.BASKET]: {
        path: RoutePath.basket,
        element: <BasketPage />,
    },
};
