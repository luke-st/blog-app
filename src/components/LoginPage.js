import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class LoginPage extends React.Component {
    state = {
        emailPrompt: undefined
    }
    handleEmailPrompt = () => {
        this.setState(() => ({ emailPrompt: true }))
    }
    handleClearEmailPrompt = () => {
        this.setState(() => ({ emailPrompt: undefined }))
    }
    render() {
        return (
            <div>
                <div className="box-layout">
                    <div className="box-layout__box">
                        <h1 className="box-layout__title">YouBlog</h1>
                        <div className='form'>
                        <button className="button" id='googleButton' onClick={this.props.startLogin}>Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)