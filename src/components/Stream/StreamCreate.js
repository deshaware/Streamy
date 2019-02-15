import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component{
    // renderInput(formProps){
    //     console.log(formProps)
    //     return <input {...formProps.input} />
    // }

    renderError = ({error,touched}) => {
        if(error && touched){
            return(
                <div className="ui error message">
                <div className="header">{error}</div>
                </div>
            );
        }
    }
     renderInput = ({input,label,meta}) => {
         const errorClassName = (meta.touched && meta.error) ? "field error" : "field";
         // const errorClassName = `field ${(meta.touched && meta.error) ? "field error": ""}`
        console.log(meta)
        return (
            <div className={errorClassName}>
            <label >{label}</label>
            <input {...input} autoComplete="off"/>
            <div className="ui red">{this.renderError(meta)}</div>

            </div>
        )
    }

    onSubmit(formValues){
        console.log(formValues);
        //network request to send data over json server api

    }
    
    render(){
        console.log(this.props)
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" type="email" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
            );
    }
}

const validate = formData => {
    const errors = {};
    if(!formData.title){
        errors.title = "Please enter Title property";
    }
    if(!formData.description){
        errors.description = "Please enter valid description";
    }
    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate); 