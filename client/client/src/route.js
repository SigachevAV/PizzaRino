import store from './pages/store';
import pizza from './pages/pizza';
export const routes = [
    {
        path: '/',
        Component: store
    },
    {
        path:'/pizza',
        Component: pizza
    },
    {
        path: '/pizza' + '/:id',
        Component: pizza
    }
]