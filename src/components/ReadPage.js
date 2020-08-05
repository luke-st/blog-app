import React from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'
import Entry from './Entry'
import { getEntry, exitEntry } from "../actions/entry"

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
        this.props.exitEntry()
    }
    render() {
        return (
            <div>
                <Header auth={this.props.auth}/>
                {console.log(this.props.entry)}
                <Entry {...this.props.entry}/>
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