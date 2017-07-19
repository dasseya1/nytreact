//Include the React library
import React from 'react';

//Include the react-router module
import { Route, Router, browserHistory, IndexRoute } from 'react-router';


import Main from '../components/Main';
import SavedContainer from '../components/containers/SavedContainer';
import SearchContainer from '../components/containers/SearchContainer';

module.exports = (

//the high level component is the Router component 
<Router history = {browserHistory}>
    <Route path="/" component={Main}>
        <Route path="saved" component={SavedContainer} />
        <Route path="search" component={SearchContainer} />
        <IndexRoute component={SearchContainer} />

    </Route>
</Router>
);