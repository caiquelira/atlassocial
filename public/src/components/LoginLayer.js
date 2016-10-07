import React from "react";
import ReactDOM from "react-dom";

export default class LoginLayer extends React.Component {

    render() {
        return (
            <Layer closer={true} flush={true} onClose={this.toggleLoginLayer.bind(this)}>
                
            </Layer>
            );
    }