import { connect } from 'react-redux';
import React, { Component } from 'react'
import {loadProfile, updateProfile, logout} from '../../actions'
import './styles.css'

class Profile extends Component {
    onSubmit = async formValues => {
        await this.props.updateProfile(formValues);
        this.props.loadProfile()
    };

    componentDidMount = async () => {
        await this.props.loadProfile();
    }

    render() {
        return (
        <div className="profile">
            <hr 
            style={{width: '90%', margin:'0 5%'}} 
            size="3" 
            color="gray" /> 
            <h1 style={{textAlign: 'center'}}>
                AVATAR SELECTION (coming soon)
            </h1>
            <hr 
            style={{width: '90%', margin:'0 5%'}} 
            size="3" 
            color="gray" /> 
            <div className="authInputs">
                <label><b>Display Name: </b></label>
                <input placeholder={this.props.profile.username}/>

                <label><b>Email: </b></label>
                <input placeholder={this.props.profile.email}/>

                <label><b>Password: </b></label>
                <input type="password" placeholder='Enter your current password'/>
                <input type="password" placeholder='Enter a new password'/>
            </div>

            <button onClick={()=>this.props.logout()}>Logout</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {profile: state.profile}
}

export default connect(mapStateToProps, {loadProfile, updateProfile, logout})(Profile)