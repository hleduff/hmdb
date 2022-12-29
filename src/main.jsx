import 'normalize.css';
import './index.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const restLink = new RestLink({ uri: import.meta.env.VITE_URL_API });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
);
