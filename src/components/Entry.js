import React from 'react'

export const Entry = (props) => (
    <div>
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>{props.title}</h1>
                <h3 className='page-header__subtitle'>{props.subtitle}</h3>
            </div>
        </div>
        <div className='content-container'>
            <div className='entry'>
                <p>{props.body}</p>
            </div>
        </div>
    </div>
);

export default Entry