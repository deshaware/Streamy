import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm'

class StreamCreate extends React.Component{
    // renderInput(formProps){
    //     console.log(formProps)
    //     return <input {...formProps.input} />
    // }

    onSubmit = (formValues) => {
        console.log(formValues);
        //network request to send data over json server api
        this.props.createStream(formValues);
    }
    
    render(){
      return(
          <div>
              <h3>Create a Stream</h3>
              <StreamForm onSubmit={this.onSubmit} />
          </div>
      )
    }
}

export default connect(null,{createStream})(StreamCreate);