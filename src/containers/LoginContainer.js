import React from "react";
import Login from "../components/login";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    
  }
  render() {
    const OnLoginUser = (login) => {
      console.log(login, "Params");
    };

    return (
      <Login
        onLogin={OnLoginUser}
        refInput={this.textInput}
      />
    );
  }
}

export default LoginContainer;
