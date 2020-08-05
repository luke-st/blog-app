import React from 'react'
import moment from 'moment'
import { history } from '../routers/AppRouter'

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.entry ? props.entry.title : '',
            body: props.entry ? props.entry.body : '',
            subtitle: props.entry ? props.entry.subtitle : '',
            createdAt: props.entry ? moment(props.entry.createdAt) : moment(),
            error: ''
        } 
    }
    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }))
    }
    onBodyChange = (e) => {
        const body = e.target.value
        this.setState(() => ({ body }))
    }
    onSubtitleChange = (e) => {
        const subtitle = e.target.value
        this.setState(() => ({ subtitle }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        const uid = this.props.uid
        if (!this.state.title || !this.state.body) {
            this.setState(() => ({ error: 'Please provide a title and body for your post.'}))
        } else {
            this.setState(() => ({ error: ''}))
            const post = {
                title: this.state.title,
                subtitle: this.state.subtitle,
                createdAt: this.state.createdAt.valueOf(),
                body: this.state.body
            }
            this.props.onSubmit(uid, post)
            history.push('/')
        }
    }
    render () {
        return (
            <form className='form' onSubmit={this.onSubmit}>
            {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input
                    className='text-input'
                    type='text'
                    placeholder='Title'
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <input
                    className='text-input'
                    type='text'
                    placeholder='Subtitle'
                    autoFocus
                    value={this.state.subtitle}
                    onChange={this.onSubtitleChange}
                />
                <textarea
                    className='textarea'
                    placeholder='Write your post here!'
                    value={this.state.body}
                    onChange={this.onBodyChange}
                >
                </textarea>
                <div>
                <button className='button'>Save entry</button>
                </div>
            </form>
        )
    }
}