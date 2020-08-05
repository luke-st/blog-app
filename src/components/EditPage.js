import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import { editEntry, removeEntry } from '../actions/entry'
import { history } from '../routers/AppRouter'

const EditPage = (props) => (
    <div className='content-container'>
        <BlogForm onSubmit={props.editEntry} uid={props.auth.uid} entry={props.entry} id={props.id} mode={'edit'} removeEntry={props.removeEntry} history={history}/>
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
    editEntry: (uid, entry) => dispatch(editEntry(uid, entry, props.match.params.id)),
    removeEntry: (uid, id) => dispatch(removeEntry(uid, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)