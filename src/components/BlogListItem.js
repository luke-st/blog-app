import React from 'react'

const BlogListItem = (props) => (
    <div>
        <div className='cell'>
        <span>{props.title}</span>
        <p>{props.subtitle}</p>
        </div>
    </div>
);

export default BlogListItem