import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamShow from './Streams/StreamShow';
import StreamList from './Streams/StreamList';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamCreate from './Streams/StreamCreate';
import NavBar from './/NavBar/NavBar';

import history from '../history';

const App = () => {
        return (
            <div className="ui container">
                <Router history={history}>             
                <div>
                <NavBar /> 
                <Switch>
                    <Route path="/streams/new" exact component={ StreamCreate}/>  
                    <Route path="/" exact component={ StreamList}/>
                    <Route path="/streams/:id"  exact component={StreamShow}/>
                    <Route path="/streams/edit/:id" exact  component={StreamEdit}/>
                    <Route path="/streams/delete/:id" exact component={StreamDelete}/>                
                </Switch>
                </div>
                </Router>
            </div>
            );
};

export default App;