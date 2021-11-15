/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './style.css'

export default function Card({title, img, body, avatar, user}) {
    return (
        <div class="card">
            <div class="top" style={{paddingBottom: '100px'}}>
                <img src={img}/>
            </div>
            <div class="bottom">
                <h2>{title}</h2>
                <p>{body}</p>
                <div className="author">
                    <img src={avatar}/>
                    <label>{user}</label>
                </div>
            </div>
        </div>
    )
}
