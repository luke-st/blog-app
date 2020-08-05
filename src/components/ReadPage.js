import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import Entry from './Entry'
import { startLogout } from '../actions/auth'
import { getEntry, exitEntry } from "../actions/entry"
import ActionButton from './ActionButton';

class ReadPage extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount = () => {
        this.props.getEntry(this.props.match.params.uid, this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <Header auth={this.props.auth} startLogout={this.props.startLogout} />
                <Entry {...this.props.entry} />
                {this.props.auth.uid === this.props.match.params.uid ? (
                    <Link to={`/edit/${this.props.match.params.uid}/${this.props.match.params.id}`}>
                        <div className='fab-container'>
                            <ActionButton />
                        </div>
                    </Link>
                ) : null}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        entry: state.entry,
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => ({
    getEntry: (uid, id) => dispatch(getEntry(uid, id)),
    exitEntry: () => dispatch(exitEntry()),
    startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadPage)