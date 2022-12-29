import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, Movie, NotFound } from './features';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: 'movie/:movieId',
        element: <Movie />,
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
