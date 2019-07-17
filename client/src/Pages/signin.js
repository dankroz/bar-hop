import React, { Component } from "react";
import "../Components/Background/style.css";
import SignInBtn from "../Components/Button/SignInBtn";
import TextArea from "../Components/TextArea";
import { Facebook, Title } from "../Components/SignIn/sign-in";
import PasswordTextArea from "../Components/PasswordTextArea";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signinUser } from "../actions/authActions";


class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/home"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.signinUser(userData);
    };



    render() {
        return (
            <>
                <Title>
                    Sign In
                </Title>
                <TextArea
                    placeholder="Email"
                    type="text"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                >
                </TextArea>
                <PasswordTextArea
                    placeholder="Password must be 6 characters long"
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <SignInBtn onClick={this.handleFormSubmit}>
                    Sign In
                </SignInBtn>
                <p className="text-center pt-2">Don't have an account? <a className="" href="/signup"><u>Sign Up</u></a></p>
                <Facebook>Sign in</Facebook>
            </>
        )
    }

}

Signin.propTypes = {
    signinUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { signinUser }
)(Signin);