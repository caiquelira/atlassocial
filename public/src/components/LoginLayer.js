import React from "react";
import ReactDOM from "react-dom";

import Layer from 'grommet/components/Layer';
import Button from 'grommet/components/Button';

export default class LoginLayer extends React.Component {

    render() {
        return (
            <Layer closer={true} flush={true}>
                <h2>Login</h2>
                <Button label="Facebook" />
            </Layer>
            );
    }
}