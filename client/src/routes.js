import Main from './page/main'
import Pizza from './page/pizza'
export const routes = [
    {
        path: '/',
        Component: Main
    },
    {
        path: '/pizza/:id',
        Component: Pizza
    }

]