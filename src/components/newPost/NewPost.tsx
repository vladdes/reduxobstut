import * as React from 'react';

import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { addPost, fetchPosts } from '../../actions';
import { bindActionCreators } from 'redux';



interface INewPostProps extends InjectedFormProps{   
    addPost: Function;
    fetchPosts: Function;
    
}

class NewPost extends React.Component<INewPostProps, any>{
    render(){
        const { handleSubmit } = this.props;
       
        return(       
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title"
                label="Title"
                component={this.renderTextField}
                />  
                <Field name="content"
                label="Content"
                component={this.renderTextAreaField}
                />     
                 <Field name="views"
                label="Views"
                component={this.renderViewsField}
                />     
            <button type="submit" className="btn btn-primary">Submit</button> 
            </form>       
        );
    }

    onSubmit(values: any){
        this.props.addPost(values, () => {
            this.props.fetchPosts();
        });
    }

    renderTextAreaField(field: any){
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : '' }`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <textarea
                className="form-control"
                {...field.input}
                type="textarea"
                rows="10"
                />
                <span style={{color: 'orange'}}>{touched ? error : ''}</span>
            </div>
        );
    }
    renderViewsField(field: any): any {
        return(
            <div className="form-group">
            <label>{field.label}</label>
                <input 
                className="form-control"
                    type="number"
                    {...field.input}
                />
            </div>
        );
    }
    renderTextField(field: any): any {
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : '' }`;
        return(
            <div className={className}>
            <label>{field.label}</label>
                <input 
                className="form-control"
                    type="text"
                    {...field.input}
                />
                <span style={{color: 'orange'}}>{touched ? error : ''}</span>
            </div>
        );
    }
}

function validate(values: any){
    const errors: any = {};

    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title that is at least 3 characters!";
    }
    
    if(!values.content){
        errors.content = "Enter some content!";
    }

    return errors;
}


let mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ addPost, fetchPosts }, dispatch);
}


export default reduxForm({
    validate,
    form: 'NewPostForm'
})(
    connect(null,  mapDispatchToProps )(NewPost)
);