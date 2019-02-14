import React from 'react';
import {Field, reduxForm} from 'redux-form'

class StreamEdit extends React.Component{

    renderField({label, input, meta}) {
        console.log(meta)
        return(
            <div>
                 <div className="field">{label}</div>
                 <input {...input} />
                 <div className="error">{(meta.touched) ? meta.error: ""}</div>
            </div>
        )
    }

    onFormSubmit(formValues){
        //formValues.preventDefault();
        console.log(formValues)
    }
    
    render(){
        console.log(this.props)
        return(
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field name="title" component={this.renderField} label="Title"/>
                <Field name="description" component={this.renderField} label="Description"/>
                <button className="ui button green">Edit</button>
                {/* <button className="ui button brown">Cancel</button> */}
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
    form:"StreamEdit",
    validate
})(StreamEdit);