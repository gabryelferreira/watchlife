import React from 'react';
import AppMenuWrapper from './AppMenuWrapper';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import Person from './pages/person';

const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <AppMenuWrapper>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/person/:id" component={Person} />
            </AppMenuWrapper>
        </BrowserRouter>
    );

}

export default Routes;