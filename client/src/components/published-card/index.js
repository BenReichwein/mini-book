import React from "react";
import Trash from '../../asset/trash.svg'
import "./styles.css";

const PublishedCard = ({ title, body, img }) => {

  return (
    <div className="publishedContainer">
        <div class="top" style={{paddingBottom: '100px'}}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={img}/>
        </div>
        <div class="bottom">
            <img src={Trash} alt="Trash can"/>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
  );
};

export default PublishedCard;
