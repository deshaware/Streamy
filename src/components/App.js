import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import StreamCreate from './Stream/StreamCreate';
import StreamEdit from './Stream/StreamEdit';
import StreamList from './Stream/StreamList';
import StreamDelete from './Stream/StreamDelete';
import StreamShow from './Stream/StreamShow';

import Header from './Header';


class App extends React.Component{
    render(){
        return(
            <div className="ui container">
                <BrowserRouter>
                <div>
                    <Header></Header>
                    <Route path="/streams/show" exact component={StreamShow} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/" exact component={StreamList} />
                </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;