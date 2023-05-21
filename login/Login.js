import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
    };
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      userName: this.state.username,
      passWord: this.state.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/accounts", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  render() {
    return (
      <form>
        <div>
          <label htmlFor="">Username:</label>
          <input type="text" name="username" onChange={this.setParams} />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="text" name="username" onChange={this.setParams} />
        </div>
        <div>
          <button type="button" onClick={this.login}>
            Login
          </button>
        </div>
      </form>
    );
  }
}
