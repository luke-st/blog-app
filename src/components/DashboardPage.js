import React from 'react'
import { connect } from 'react-redux'
import selectEntries from '../selectors/entries'
import BlogListFilters from './BlogListFilters'
import BlogList from './BlogList'
const DashboardPage = (props) => (
    <div>
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
        user: state.auth 
    }
}


export default connect(mapStateToProps)(DashboardPage)