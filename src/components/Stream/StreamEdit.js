import React from 'react';
//import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';  
import {fetchStream} from '../../actions';
import {editStream} from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';
class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        console.log(formValues)
        this.props.editStream(this.props.match.params.id,formValues);
    }
    render(){
        console.log(this.props)
        const currentStream = this.props.stream;
        return(
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                 onSubmit={this.onSubmit}
                 initialValues ={_.pick(currentStream,'title','description')}
                 />
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,
    {fetchStream,editStream}
    )
    (StreamEdit);

// export default StreamEdit;