import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { BasketPage } from 'pages/BasketPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    BASKET = 'basket',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.BASKET]: '/basket',
    [AppRoutes.NOT_FOUND]: '/*',
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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
