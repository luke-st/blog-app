import React from 'react'
import moment from 'moment'
import { history } from '../routers/AppRouter'
import RemoveModal from './RemoveModal'

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.entry ? props.entry.title : '',
            body: props.entry ? props.entry.body : '',
            subtitle: props.entry ? props.entry.subtitle : '',
            createdAt: props.entry ? moment(props.entry.createdAt) : moment(),
            isPrivate: props.entry ? props.entry.isPrivate : false,
            error: '',
            promptRemove: undefined
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
    onPrivateToggle = (e) => {
        const isChecked = e.target.checked
        this.setState({ isPrivate: isChecked })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const uid = this.props.uid
        if (!this.state.title || !this.state.body) {
            this.setState(() => ({ error: 'Please provide a title and body for your post.' }))
        } else {
            this.setState(() => ({ error: '' }))
            const post = {
                title: this.state.title,
                subtitle: this.state.subtitle,
                createdAt: this.state.createdAt.valueOf(),
                body: this.state.body,
                isPrivate: this.state.isPrivate
            }
            this.props.onSubmit(uid, post)
            history.push('/')
        }
    }
    handleClearPromptRemove = () => {
        this.setState(() => ({ promptRemove: undefined }))
    }
    onRemove = () => {
        this.setState(() => ({ promptRemove: true }))
    }
    onRemoveConfirm = () => {
        this.props.removeEntry(this.props.uid, this.props.id)
        this.props.history.push('/')
    }
    componentDidMount = () => {
        if (this.props.entry === {}) {
            this.forceUpdate()
        }
    }
    render() {
        return (
            <div>
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
                    <div className='page-header__title'>
                    <p><input type='checkbox' onClick={this.onPrivateToggle} defaultChecked={this.state.isPrivate} /> Private (Public <span>can{this.state.isPrivate ? 'not' : ''}</span> view this)</p>
                    </div>
                    <div>
                        <button className='button'>Save entry</button>
                    </div>
                </form>
                <div>
                    {this.props.mode === 'edit' ? (
                        <button className='button button--delete' onClick={this.onRemove}>Delete entry</button>
                    ) : null}
                    <div>
                        <RemoveModal
                            promptRemove={this.state.promptRemove}
                            handleClearPromptRemove={this.handleClearPromptRemove}
                            onRemoveConfirm={this.onRemoveConfirm}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
