import React, { Component } from "react";
import Titles from "../components/Titles";
import Input from "../components/Input";
import { ERRORS_LABELS, LABELS } from './Constantes/ERRORS_labels'


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {},
      errors: {},
      hide: true
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
      input
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input[LABELS.SURNAME] = "";
      input[LABELS.NAME] = "";
      input[LABELS.EMAIL_VALID] = "";
      input[LABELS.PASSWORD] = "";
      input[LABELS.CONFIRM_PASSWORD] = "";

      this.setState({ input: input });
      alert("Form submited");
    }
  };

  validate = () => {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input[LABELS.SURNAME]) {
      isValid = false;
      errors[LABELS.SURNAME] = ERRORS_LABELS.SURNAME;
    }
    if (!input[LABELS.NAME]) {
      isValid = false;
      errors[LABELS.NAME] = ERRORS_LABELS.NAME;
    }
    if (!input[LABELS.EMAIL_VALID]) {
      isValid = false;
      errors[LABELS.EMAIL_VALID] = ERRORS_LABELS.EMAIL_VALID;
    }
    if (typeof input[LABELS.EMAIL_VALID] !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input[LABELS.EMAIL_VALID])) {
        isValid = false;
        errors[LABELS.EMAIL_VALID] = ERRORS_LABELS.EMAIL_VALID;
      }
    }
    if (typeof input[LABELS.PASSWORD] !== "undefined") {
      let pattern = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
      if (!pattern.test(input[LABELS.PASSWORD])) {
        isValid = false;
        errors[LABELS.PASSWORD] = ERRORS_LABELS.PASSWORD_MUST_CONTAIN;
      }
    }
    console.log(input[LABELS.PASSWORD]);

    if (!input[LABELS.PASSWORD]) {
      isValid = false;
      errors[LABELS.PASSWORD] = ERRORS_LABELS.PASSWORD;
    }

    if (!input[LABELS.CONFIRM_PASSWORD]) {
      isValid = false;
      errors[LABELS.CONFIRM_PASSWORD] = ERRORS_LABELS.CONFIRM_PASSWORD;
    }
    if (
      typeof input[LABELS.PASSWORD] !== "undefined" &&
      typeof input[LABELS.CONFIRM_PASSWORD] !== "undefined"
    ) {
      if (input[LABELS.PASSWORD] !== input[LABELS.CONFIRM_PASSWORD]) {
        isValid = false;
        errors[LABELS.PASSWORD] = ERRORS_LABELS.PASSWORDS_DONT_MATCH;
      }
    }

    this.setState({ errors: errors });
    return isValid;
  };

  render() {
    const { hide } = this.state
    const { input } = this.state
    const { errors } = this.state

    return (
      <div className="profileContainer">
        <Titles
          mainTitle="Sign up"
          subTitle="Please fill in this form to create an account !"
        />
        <form className='form'>
          <div className='name'>
            <div className='firstName'>
              <Input
                type="text"
                name={LABELS.SURNAME}
                value={input.surname}
                onChange={this.handleChange}
                placeholder="First name"
              />
              <div className='errors'>
                {errors.surname}
              </div>
            </div>
            <div className='lastName'>
              <Input
                type="text"
                name={LABELS.NAME}
                placeholder="Last name"
                value={input.name}
                onChange={this.handleChange}
              />
              <div className='errors'>
                {errors.name}
              </div>
            </div>
          </div>

          <div className='email'>
            <Input
              name={LABELS.EMAIL_VALID}
              placeholder="Email"
              value={input.email}
              onChange={this.handleChange}
            />

            <div className='errors'>
              {errors.email}
            </div>
          </div>

          <div className='password'>

            <div className='visibility'>
              <input
                type={hide ? "password" : "text"}
                name={LABELS.PASSWORD}
                placeholder="Password"
                value={input.password}
                onChange={this.handleChange}
              />

              {hide ?
                (<i className="material-icons" onClick={this.showHide}>visibility_off</i>) :
                (<i className="material-icons" onClick={this.showHide}>visibility</i>)}
            </div>

            <div className='errors'>
              {errors.password}
            </div>
          </div>

          <div className='confirmPassword'>
            <input
              type={LABELS.PASSWORD}
              name={LABELS.CONFIRM_PASSWORD}
              value={input.confirmPassword}
              onChange={this.handleChange}
              placeholder="Confirm password"
            />

            <div className='errors'>
              {errors.confirmPassword}
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
