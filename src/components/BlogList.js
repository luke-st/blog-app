import React from 'react'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/icon/';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props, classes) => (
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
        {props.auth.uid ? (
            <Link to={`/add/${props.auth.uid}`}>
                <div className='fab-container'>
                    <Fab color="primary" aria-label="add" className={classes.margin}>
                        <Icon style={{ fontSize: '3rem' }}>create</Icon>
                    </Fab>
                </div>
            </Link>
        ) : null}
    </div>
)

const mapStateToProps = (state) => {
    return {
        auth: state.auth 
    }
}


export default connect(mapStateToProps)(BlogList)