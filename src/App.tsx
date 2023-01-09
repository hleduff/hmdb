import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Movie, NotFound, Popular, TopRated, Upcoming } from './views';

const router = createBrowserRouter([
    {
        path: '/popular',
        element: <Popular />,
    },
    {
        path: '/toprated',
        element: <TopRated />,
    },
    {
        path: '/upcoming',
        element: <Upcoming />,
    },
    {
        path: 'movie/:movieId',
        element: <Movie />,
    },
    {
        path: '/',
        element: <Navigate to="/popular" replace />,
        errorElement: <NotFound />,
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
