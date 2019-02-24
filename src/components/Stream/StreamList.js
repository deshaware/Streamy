import React from 'react';
import {fetchStreams} from '../../actions/';    
import {connect} from 'react-redux';
import Loading from '../Loading';
import {Link} from 'react-router-dom'

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return(
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary" >Edit
                    </Link>
                    {/* <button className="ui button negative">Delete</button> */}
                    <Link 
                        to={`/streams/delete/${stream.id}`} className="ui button negative"
                    >Delete</Link>
                </div>
            )
        }
    }

    renderStreams(){ 
        return this.props.streams.map(stream => {
            const showStream = `/streams/${stream.id}`;
            return (
                <div className="item" key={stream.id}>
                 {this.renderAdmin(stream)}   
                 <i className="large middle aligned icon camera" />
                 <div className="content">
                 <Link to={showStream} >
                 {stream.title}
                 </Link>
                    <div className="description">
                    {stream.description}
                    </div>
                 </div>                                 
                </div>

            )
        });        
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign:'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }
    render(){
        //this.renderStreams();
        console.log(this.props.streams)
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderStreams()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps,{
    fetchStreams
})(StreamList);