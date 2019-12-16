import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PostList from './components/Postlist/Postlist';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';

const Routes = (props) => {
    return(
        <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/profile/:name" component={Profile}/>
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Routes;