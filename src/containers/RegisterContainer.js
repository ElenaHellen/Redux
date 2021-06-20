import React  from "react";
import Register from "../components/register";

import {initialize} from 'redux-form';
import {connect} from 'react-redux';

class RegisterContainer extends React.Component {
  render() {
    const initialFormValues = {
      email: "",
      firstName: "",
      secondName: "",
    };
    const OnRegisterUser = (register) => {
      console.log("Params: ", register);
      console.log("firstName:", register.firstName);
      console.log("firstName trim:", register.firstName.trim());
    };

    return <Register initialFormValues={initialFormValues} onRegister={OnRegisterUser} />;
  }
}

function mapDispatchToProps(dispatch){
  return {
      initializePost: function (post){
          dispatch(initialize('post', post));
      }
  }
}
// прокидываем в props объект для инициализаци формы
function mapStateToProps(state, ownProps){
  const id = ownProps.params.id;
  return {
     post: state.posts[id]
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
