import React from 'react'

import LoginLayer from 'components/LoginLayer'

export default function LoginRequired(WrappedComponent) {

    return class LoginWrapper extends React.Component {

        constructor(props) {
            super(props)
            this.state = {loggedIn: false}
        }

        render() {
            return (
                <div>
                    {this.state.loggedIn ? {null} : (<LoginLayer />)}
                    <WrappedComponent {...this.props} />
                </div>)
        }
    }
}
