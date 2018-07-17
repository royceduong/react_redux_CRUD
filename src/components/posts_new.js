import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }
    render(){
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Catagories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
            
        )
    }
}

function validate(values){
    // console.log(values) -> {title:'asdf', categories:'faef', content:'iojadd'}
    const errors = {};
    //if errors is empty, the form is fine to submit, 
    //redux-form takes care of this
    if (!values.title){
        errors.title = "Enter a title";
    }
    if (!values.categories){
        errors.title = "Enter a category";
    }
    if (!values.content){
        errors.title = "Enter some content";
    }
    return errors;
}
export default reduxForm({
    validate,
    form: 'PostsNewForm' 
})(PostsNew);