import React, { Component } from "react";
import Titles from "../components/Titles";
import Input from "../components/Input";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {},
      errors: {},
      hide: true,
    };
  }

  showHide = () => {
    this.setState({
      hide: !this.state.hide,
    });
  };

  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["surname"] = "";
      input["name"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirmPassword"] = "";

      this.setState({ input: input });
      alert("Form submited");
    }
  };

  validate = () => {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["surname"]) {
      isValid = false;
      errors["surname"] = "Please enter your first name.";
    }
    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your last name.";
    }
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter valid email address.";
    }
    if (typeof input["email"] !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
    if (typeof input["password"] !== "undefined") {
      let pattern = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
      if (!pattern.test(input["password"])) {
        isValid = false;
        errors["password"] =
          "Password must contain at least eight characters, at least one uppercase letter, one lowercase letter and one number.";
      }
    }
    console.log(input["password"]);

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirmPassword"]) {
      isValid = false;
      errors["confirmPassword"] = "Please enter your confirm password.";
    }
    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirmPassword"] !== "undefined"
    ) {
      if (input["password"] !== input["confirmPassword"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }

    this.setState({ errors: errors });
    return isValid;
  };

  render() {

    return (
      <div className="profileContainer">
        <div>
          <Titles />
        </div>

        <form className='form'>
          <div className='name'>
            <div className='firstName'>
              <Input
                type="text"
                name="surname"
                value={this.state.input.surname}
                onChange={this.handleChange}
                placeholder="Enter first name"
              />
              <div className='errors'>
                {this.state.errors.surname}
              </div>
            </div>
            <div className='lastName'>
              <Input
                type="text"
                name="name"
                placeholder="Last name"
                value={this.state.input.name}
                onChange={this.handleChange}
              />
              <div className='errors'>
                {this.state.errors.name}
              </div>
            </div>
          </div>

          <div className='email'>
            <Input
              name="email"
              placeholder="Email"
              value={this.state.input.email}
              onChange={this.handleChange}
            />

            <div className='errors'>
              {this.state.errors.email}
            </div>
          </div>

          <div className='password'>

            <div className='visibility'>
              <input
                type={this.state.hide ? "password" : "text"}
                name="password"
                placeholder="Password"
                value={this.state.input.password}
                onChange={this.handleChange}
              />

              {this.state.hide ?
                (<i className="material-icons" onClick={this.showHide}>visibility_off</i>) :
                (<i className="material-icons" onClick={this.showHide}>visibility</i>)}
            </div>

            <div className='errors'>
              {this.state.errors.password}
            </div>
          </div>

          <div className='confirmPassword'>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.input.confirmPassword}
              onChange={this.handleChange}
              placeholder="Enter confirm password"
            />

            <div className='errors'>
              {this.state.errors.confirmPassword}
            </div>
          </div>
        </form>

        <div className='button'>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>

      </div>
    );
  }
}

export default SignUp;
