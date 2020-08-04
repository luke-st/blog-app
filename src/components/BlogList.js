import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => (
            <div className='content-container'>
                <div className='grid'>
                {
                    props.entries.length === 0 ? (
                            <div className='list-item list-item--message list-item--full-length'>
                                <span>No posts found 👀</span>
                            </div>
                    ) : (
                        props.entries.map((entry) => (
                            <BlogListItem key={entry.id} {...entry} />
                        ))
                    )
                }
                </div>    
            </div>
        )


export default BlogList