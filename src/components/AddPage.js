import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import { addEntry } from '../actions/entry'

const AddPage = (props) => (
    <div className='content-container'>
        <BlogForm onSubmit={props.addEntry} uid={props.auth.uid}/>
    </div>
);

const mapStateToProps = (state) => {
    return {
        auth: state.auth 
    }
}

const mapDispatchToProps = (dispatch) => ({
    addEntry: (uid, entry) => dispatch(addEntry(uid, entry))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPage)