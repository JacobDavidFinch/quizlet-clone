import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';
import { Navbar } from './containers/navbar';
import './App.scss';
import AppShell from './AppShell';
import { Welcome, FourOFour, Home } from './pages';

// const Home = lazy(() => import('./pages/home'));
// const Search = lazy(() => import('./pages/Search'));
// const Create = lazy(() => import('./pages/Create'));
// const Profile = lazy(() => import('./pages/Profile')); // This will include the Recent, Sets, Folders, Classes
// const Settings = lazy(() => import('./pages/Settings'));
// const Users = lazy(() => import('./pages/Users'));

const store = configureStore({
    reducer: rootReducer,
});

const LoadingFallback = () => (
    <AppShell>
        <div className='p-4'>Loading...</div>
    </AppShell>
);

const UnauthenticatedRoutes = () => (
    <Switch>
        <Route path='/login'>
            <Welcome authStatus='login' />
        </Route>
        <Route path='/signup'>
            <Welcome authStatus='signUp' />
        </Route>
        <Route exact path='/'>
            <Welcome />
        </Route>
        <Route path='*'>
            <FourOFour />
        </Route>
    </Switch>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
    const auth = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={() => (auth.isAuthenticated() ? <AppShell>{children}</AppShell> : <Redirect to='/' />)}
        ></Route>
    );
};

const AppRoutes = () => {
    return (
        <>
            <Suspense fallback={<LoadingFallback />}>
                <Switch>
                    <AuthenticatedRoute path='/home'>
                        <Home />
                    </AuthenticatedRoute>
                    <UnauthenticatedRoutes />
                </Switch>
            </Suspense>
        </>
    );
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <FetchProvider>
                    <div>
                        <AppRoutes />
                    </div>
                </FetchProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;

// NOTE: Admin routes will probably exist in the actual site, but will not exist in this clone
