import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <button type="submit" className="btn">Create</button>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'newPost'
})(Form);

export default Form;
