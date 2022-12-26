import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './views/Home';
import { Movie } from './views/Movie';
import { NotFound } from './views/NotFound';

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
