import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import BlogList from './BlogList'
import BlogListFilters from './BlogListFilters'
import selectEntries from '../selectors/entries'

export const HomePage = (props) => (
    <div>
        <Header user={props.user} />
        <div className='page-header'>
            <div className='content-container'>
                <BlogListFilters bloggers={props.bloggers} />
            </div>
        </div>
        <div className='content-container'>
            <BlogList entries={props.entries} />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        entries: selectEntries(state.entries, state.filters),
        bloggers: state.bloggers,
        auth: state.auth 
    }
}


export default connect(mapStateToProps)(HomePage)