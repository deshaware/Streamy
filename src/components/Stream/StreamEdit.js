import React from 'react';
//import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';  
import {fetchStream} from '../../actions';
import StreamForm from './StreamForm';
import {editStream} from '../../actions';

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit =formValues => {
        console.log(formValues)
        //this.props.editStream(this.props.match.params.id,formValues);
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h3>Edit Stream</h3>
                <StreamEdit onSubmit={this.props}  />
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);

// export default StreamEdit;