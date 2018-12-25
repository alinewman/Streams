import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamForm extends Component {

    renderError({error, touched}) {
        if(touched && error){
            return (
                <div>{error}</div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        return (  
        <div className="field">
        <label>{label}</label>   
        <input {...input}  autoComplete="off"/>
      {this.renderError(meta)}
        </div>  
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name='title' component={this.renderInput} label='enter title'/>
                <Field name='description' component={this.renderInput} label='enter description'/>
                <button className="ui button primary">submit</button>
           </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'please enter a title';
    }
    if (!formValues.description) {
        errors.description = 'please enter a description';
    } 
        return errors;
    
};
export default reduxForm({
    form: 'stream from',
    validate: validate
}) (StreamForm);

