import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button/SignInBtn";
import TextArea from "../Components/TextArea";
import API from "../Utils/API";



class NewBar extends Component {
    state = {
        bars: [],
        name: "",
        latitude: "",
        longtitude: "",
        type: ""
    }

    clicked1 = event => {
        event.preventDefault();
        console.log("hello");
    }

    loadBars = () => {
        API.getBars()
            .then(res =>
                this.setState({ bars: res.data, name: "", longtitude: "", latitude: "", type: "" })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
            API.saveBar({
                name: this.state.name,
                latitude: this.state.latitude,
                longtitude: this.state.longtitude,
                type: this.state.type
            })
                .then(res => {
                    console.log("great!")
                    this.loadBars()
                })

                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <>
                <TextArea
                    value={this.state.name}
                    placeholder="Bar Name"
                    name="name"
                    onChange={this.handleInputChange}
                >
                </TextArea>
                <TextArea
                    value={this.state.latitude}
                    placeholder="Latitude"
                    name="latitude"
                    onChange={this.handleInputChange}
                >
                </TextArea>
                <TextArea
                    value={this.state.longtitude}
                    placeholder="Longtitude"
                    name="longtitude"
                    onChange={this.handleInputChange}
                >
                </TextArea>
                <TextArea
                    value={this.state.type}
                    placeholder="type"
                    name="type"
                    onChange={this.handleInputChange}
                >
                </TextArea>

                <Button
                    disabled={!(this.state.name)}
                    onClick={this.handleFormSubmit}>
                    Submit
                </Button>

            </>
        )
    }

}

export default NewBar;