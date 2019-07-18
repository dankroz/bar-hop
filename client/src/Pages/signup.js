import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../Components/Background/style.css";
// import TextArea from "../Components/TextArea"
import { Title } from "../Components/SignIn/sign-in";
import SignInBtn from "../Components/Button/SignInBtn";
import PasswordTextArea from "../Components/PasswordTextArea";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signupUser } from "../actions/authActions";
// import classnames from "classnames";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            errors: {}
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value });
        // this.console.log(this.event.target)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        
        this.props.signupUser(newUser, this.props.history);
    };


    render() {
        // const { errors } = this.setState;

        return (
            <>

                <Title>
                    Sign Up
                    </Title>

                <PasswordTextArea
                    placeholder="Name"
                    type="text"
                    id="name"
                    // error={errors.name}
                    value={this.state.name}
                    onChange={this.handleInputChange}
                >
                </PasswordTextArea>
                <PasswordTextArea
                    placeholder="Email"
                    type="text"
                    id="email"
                    // error={errors.email}
                    value={this.state.email}
                    onChange={this.handleInputChange}
                >
                </PasswordTextArea>
                <PasswordTextArea
                    placeholder="Password"
                    type="password"
                    id="password"
                    // error={errors.password}
                    value={this.state.password}
                    onChange={this.handleInputChange}
                >
                </PasswordTextArea>
                <SignInBtn onClick={this.handleFormSubmit}>
                    Sign Up
                    </SignInBtn>
                <p className="text-center pt-2">Already have an account? <a className="" href="/signin"><u>Sign In</u></a></p>

            </>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

SignUp.propTypes = {
    signupUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { signupUser })(withRouter(SignUp));