/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import BookGirl from '../../asset/book-girl.svg';
import './styles.css'

export default function HeaderCard({titleText, buttonText, buttonClick}) {
    return (
        <div className="headerCard">
            <h4>{titleText}</h4>
            {buttonText ? (
                <button onClick={buttonClick}>
                    {buttonText}
                </button>
            ): null}
            <img src={BookGirl}/>
        </div>
    )
}
