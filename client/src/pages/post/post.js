/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';

import { createPost, getPost, deletePost, createComment, deleteComment, getUid } from '../../actions';
import HeaderCard from '../../components/header-card';
import Card from '../../components/card';
import './post.css'

class Post extends React.Component {
    onSubmit = formValues => {
        this.props.createPost(formValues);
    };

    componentDidMount = () => {
        this.props.getPost();
        this.props.getUid();
    }

    render() {
        return (
            <div className="postContainer">
                <HeaderCard 
                    titleText="Still need to decide on text that
                    will relatively be this length but talks about reading..."
                />
                <div class="cards clearfix">  
                    <div class="card-col-1">
                        <Card 
                            title="Test"
                            body="Test Body jwdioajo sdjoiaw jjad oijo ajwoi djoawj dji waio djoij awoidj oiajw oidjw aoijdoijawi ojdoi ajoid joiaw jdoi jawdj oiada sldhw andosan jnwufa ioh"
                            img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            avatar="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            user="Benny"
                        />
                        <Card 
                            title="Test"
                            body="Test Body awodh oaw doijaodi jawoid jioawj dijda woij d"
                            img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            avatar="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            user="Benny"
                        />
                    </div>
                    <div class="card-col-2">
                        <Card 
                            title="Test"
                            body="Test Bodya doia jwiojd"
                            img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            avatar="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            user="Benny"
                        />
                        <Card 
                            title="Test"
                            body="Test Body awodh oaw doijaodi jawoid jioawj dijda woij d"
                            img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            avatar="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            user="Benny"
                        />
                    </div>
                    <div class="card-col-3">
                        <Card 
                            title="Test"
                            body="Test Body"
                            img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            avatar="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            user="Benny"
                        />
                        <Card 
                            title="Test"
                            body="Test Body awodh oaw doijaodi jawoid jioawj dijda woij djojoij oiwdjaio jwaoijd iowahd hau hduwah idohawou duahdo uwajo jdi waj iodjaiwo hdiowah doh ioahdo iwaiod jwaiod jaiwojd id wiajd ia jwidj awd ijd a"
                            img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            avatar="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
                            user="Benny"
                        />
                    </div>
                </div>
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
  { createPost, getPost, deletePost, createComment, deleteComment, getUid }
)(Post);