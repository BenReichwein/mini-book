/* eslint-disable no-useless-constructor */
import React from "react";
import './styles.scss'

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleInputChange = (event) => {
        const { value, id } = event.target;
        this.setState({
            [id]: value
        });
    }

    onSubmit = e => {
        this.props.onSubmit({
            email: this.state.email, 
            password: this.state.password
        });
        e.preventDefault();
    };

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="text" id="email" label="email" disabled={this.props.mode === 'signup'} onChange={this.handleInputChange}/>
                    <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'} onChange={this.handleInputChange}/>
                </div>
                <div className="form-group form-group--signup">
                    <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
                    <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} onChange={this.handleInputChange}/>
                    <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="password" label="repeat password" disabled={this.props.mode === 'login'} onChange={this.handleInputChange}/>
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled, onChange }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled} onChange={onChange}/>
);