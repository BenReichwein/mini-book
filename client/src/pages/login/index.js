/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { connect } from 'react-redux';
import { login, register } from '../../actions';
import {LoginForm} from '../../components/login-form'
import Times from '../../asset/times.svg'
import '../../components/login-form/styles.scss'
import history from '../../history';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'login'
        }
    }
    toggleMode() {
        const newMode = this.state.mode === 'login' ? 'signup' : 'login';
        this.setState({ mode: newMode});
    }

    onSubmit = async formValues => {
        if (this.state.mode === 'login') {
            await this.props.login(formValues);
        } else {
            await this.props.register(formValues);
        }
    };
    render() {
        return (
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
                <section className={`form-block form-block--is-${this.state.mode}`}>
                    <header className="form-block__header">
                        <img onClick={()=> history.goBack()} className="form-block__exit" src={Times}/>
                        <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                        <div className="form-block__toggle-block">
                            <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                            <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                            <label htmlFor="form-toggler"></label>
                        </div>
                    </header>
                    <LoginForm mode={this.state.mode} onSubmit={this.onSubmit}/>
                </section>
            </div>
        )
    }
}

export default connect(
  null,
  { login, register }
)(Login);