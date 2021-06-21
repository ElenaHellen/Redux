import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

const renderField = ({ type, label, input, meta: { touched, error }}) => (
  <div className="input-row">
    <label>{label}</label>
    <br />
    <input {...input} type={type}/>
    {touched && error &&
     <span className="error">{error}</span>}
  </div>
)

const submit = ({ firstName='', lastName='', email=''}) => {
  let error = {};
  let isError  = false;
  if (firstName.trim() === '') {
    error.firstName = "Required";
    isError = true;
  }

  if (firstName.length > 10) {
    error.firstName = "Long";
    isError = true;
  }

  if (lastName.trim() === '') {
    error.lastName = "Required";
    isError = true;
  }

  if (email.trim() === '') {
    error.email = "Required";
    isError = true;
  }

if (isError) {
  throw new SubmissionError(error);
} else {
  //submit form to server
  console.log('Submit Validation')
}
}

const ContactFormFunc = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="firstName" label = "First Name" component={renderField} type="text" />
      <Field name="lastName" label = "Last Name"component={renderField} type="text" />
      <Field name="email" label = "Email "component={renderField} type="email" />
        <button type="submit">Submit</button>
    </form> 
)

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactFormFunc)

export default ContactForm