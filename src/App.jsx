import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './components/ErrorPage';
import { Home } from './components/Home';
import { Movie } from './components/Movie';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'movie/:movieId',
        element: <Movie />,
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
