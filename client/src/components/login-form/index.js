/* eslint-disable no-useless-constructor */
import React from "react";
import './styles.scss'

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <form onSubmit={this.props.onSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="text" id="username" label="username" disabled={this.props.mode === 'signup'}/>
                    <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
                </div>
                <div className="form-group form-group--signup">
                    <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
                    <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);