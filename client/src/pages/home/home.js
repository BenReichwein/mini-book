import { connect } from 'react-redux';
import React, { Component } from 'react'

import HeaderCard from '../../components/header-card/header-card';
import {welcomeMessage} from '../../actions'
import history from '../../history';

class Home extends Component {
    componentDidMount() {
        this.props.welcomeMessage();
    }
    render() {
        return (
            <div>
                <HeaderCard 
                    titleText="Still need to decide on text that
                    will relatively be this length but talks about reading..."
                    buttonText="Visit Reads"
                    buttonClick={()=> history.push('reads')}
                />
                {this.props.message}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {message: state.message}
}

export default connect(mapStateToProps, {welcomeMessage})(Home)