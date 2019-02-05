import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import StreamCreate from './Stream/StreamCreate';
import StreamEdit from './Stream/StreamEdit';
import StreamList from './Stream/StreamList';
import StreamDelete from './Stream/StreamDelete';
import StreamShow from './Stream/StreamShow';
import GoogleAuth from './GoogleAuth';



class App extends React.Component{
    render(){
        return(
            <div className="ui container">
                <BrowserRouter>
                <div>
                    <Route path="/stream/show" exact component={StreamShow} />
                    <Route path="/stream/add" exact component={StreamCreate} />
                    <Route path="/stream/edit" exact component={StreamEdit} />
                    <Route path="/stream/delete" exact component={StreamDelete} />
                    <Route path="/" exact component={StreamList} />
                    <GoogleAuth />
                </div>
                    
                </BrowserRouter>
            </div>
        );
    }
}

export default App;