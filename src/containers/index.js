import React from 'react'
import ContactForm from "../components/login/loginPage"

class ContactPage extends React.Component {
  
  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}
export default ContactPage
