import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import { editEntry } from '../actions/entry'

const EditPage = (props) => (
    <div className='content-container'>
        <BlogForm onSubmit={props.editEntry} uid={props.auth.uid} entry={props.entry} id={props.id}/>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        auth: state.auth,
        entry: state.entry,
        id: props.match.params.id
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editEntry: (uid, entry) => dispatch(editEntry(uid, entry, props.match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)