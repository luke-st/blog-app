import React from 'react'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/icon/';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import Entry from './Entry'
import { getEntry, exitEntry } from "../actions/entry"
import ActionButton from './ActionButton';

class ReadPage extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }
    componentDidMount = () => {
        this.props.getEntry(this.props.match.params.uid, this.props.match.params.id)
    }
    componentWillUnmount = () => {
        // this.props.exitEntry()
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header auth={this.props.auth} />
                <Entry {...this.props.entry} />
                <Link to={`/edit/${this.props.match.params.uid}/${this.props.match.params.id}`}>
                    <div className='fab-container'>
                        <ActionButton />
                    </div>
                </Link>
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
    exitEntry: () => dispatch(exitEntry())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadPage)