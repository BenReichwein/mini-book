import { connect } from 'react-redux';
import React, { Component } from 'react'
import PrimaryButton from '../../components/primary-button'
import './styles.css'

class Create extends Component {
    onSubmit = async formValues => {
        console.log('submitted')
    };

    render() {
        return (
        <div className="create">
            <hr 
            style={{width: '90%', margin:'0 5%'}} 
            size="3" 
            color="gray" /> 
            <h1 style={{textAlign: 'center'}}>
                IMAGE UPLOAD (coming soon)
            </h1>
            <hr 
            style={{width: '90%', margin:'0 5%', marginBottom: '30px'}} 
            size="3" 
            color="gray" /> 
            <label><b>Title: </b></label>
            <textarea rows="1" placeholder="The poet is dead"/>

            <label><b>Summary: </b></label>
            <textarea rows="2" placeholder="Well you can guess that the poet died in this one, 
                                but its going to be engaging I swear"/>

            <label><b>Story: </b></label>
            <textarea rows="6" placeholder='Once upon a time... other cheesy story starts'/>

            <PrimaryButton
                text="Create"
                buttonSize="primeBtn-large"
                onClick={this.onSubmit}
                style={{margin: '15px auto', display: 'block'}}
            />
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return null
}

export default connect(mapStateToProps, {})(Create)