import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = (props) => (
    <div>
        <Link to={`read/${props.uid}/${props.id}`} style={{ textDecoration: 'none'}}>
            <div className='cell'>
                <span>{props.title}</span>
                <p>{props.subtitle}</p>
            </div>
        </Link>
    </div>
);

export default BlogListItem