import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Error } from './views/Error';
import { Home } from './views/Home';
import { Movie } from './views/Movie';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: 'movie/:movieId',
        element: <Movie />,
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
