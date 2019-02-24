import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream , deleteStream } from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component{
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions(){
        const {id} = this.props.match.params;
        return(
            <React.Fragment>
                <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>Delete</button>
                <Link to    ="/" className="ui button" >Cancel</Link>
            </React.Fragment>
        );
    }
    
    renderContent(){
        return (this.props.stream) ? `Want to delete the Stream - ${this.props.stream.title} ?` : `Delete Stream -`;
    }

    render(){
        console.log(this.props.stream)
        return(
                <Modal 
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss = {() => history.push('/')}
                />
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        stream:state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream,deleteStream
})(StreamDelete);