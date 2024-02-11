import React from 'react';
import ReactDOM from 'react-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';

const PUBLISHABLE_KEY = 'pk_test_aW5zcGlyZWQtYmFib29uLTAuY2xlcmsuYWNjb3VudHMuZGV2JA';

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

ReactDOM.render(
    <ClerkProvider publishableKey='pk_test_aW5zcGlyZWQtYmFib29uLTAuY2xlcmsuYWNjb3VudHMuZGV2JA'>
        <App />
    </ClerkProvider>,
    document.getElementById('root')
);