/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';

import { getPost, deletePost, getUid } from '../../actions';
import PrimaryButton from '../../components/primary-button';
import PublishedCard from '../../components/published-card';
import history from '../../history';
import './styles.css'

class Publish extends React.Component {

    componentDidMount = () => {
        this.props.getPost();
        this.props.getUid();
    }

    render() {
        return (
            <div className="publish">
                <h1 className="titleText">
                    Are you ready to get that new work of art out there!
                </h1>
                <PrimaryButton
                    text="Create"
                    buttonSize="primeBtn-large"
                    onClick={()=> history.push('/create')}
                    style={{margin: '15px auto', display: 'block'}}
                />
                <hr 
                style={{width: '90%', margin:'0 5%'}} 
                size="3" 
                color="gray" /> 
                <PublishedCard
                    title="This is the test title"
                    body="Testing 123456789 123456890 123456789 1234567895 122334387987"
                    img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post,
        auth: state.auth
    }
}

export default connect(
  mapStateToProps,
  { getPost, deletePost, getUid }
)(Publish);