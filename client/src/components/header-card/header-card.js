/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import BookGirl from '../../asset/book-girl.svg';
import './header-card.css'

export default function HeaderCard({titleText, buttonText, buttonClick}) {
    return (
        <div className="headerCard">
            <h3>{titleText}</h3>
            <button onClick={buttonClick}>
                {buttonText}
            </button>
            <img src={BookGirl}/>
        </div>
    )
}
