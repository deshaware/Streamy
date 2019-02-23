import React from 'react';
import {Router, Route} from 'react-router-dom';

import StreamCreate from './Stream/StreamCreate';
import StreamEdit from './Stream/StreamEdit';
import StreamList from './Stream/StreamList';
import StreamDelete from './Stream/StreamDelete';
import StreamShow from './Stream/StreamShow';

import Header from './Header';

import history from '../history';


class App extends React.Component{
    render(){
        return(
            <div className="ui container">
                <Router  history={history}>
                <div>
                    <Header></Header>
                    <Route path="/streams/show" exact render={() => <StreamShow />} />
                    <Route path="/streams/new" exact render={() => <StreamCreate />}/>
                    <Route path="/streams/edit/:id" exact render={props => <StreamEdit {...props} />}/>
                    <Route path="/streams/delete" exact render={() => <StreamDelete />}/>
                    <Route path="/" exact render={() => <StreamList />} />
                </div>
                </Router >
            </div>
        );
    }
}

export default App;