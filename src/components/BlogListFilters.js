import React from 'react'
import { getBloggerEntries, resetEntries } from '../actions/entries'
import { connect } from 'react-redux'
import { setTextFilter, setEndDate, setStartDate, setUID } from '../actions/filters'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'

class BlogListFilters extends React.Component {
    state = {
        calendarFocused: null,
        activeBlogger: this.props.auth.uid ? this.props.auth.uid : null,
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onVloggerChange = (e) => {
        const uid = e.target.value
        this.setState({ activeBlogger:uid })
        this.props.getBloggerEntries(uid)
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    componentDidMount = () => {
        this.props.getBloggerEntries(this.state.activeBlogger)
    }
    componentWillUnmount = () => {
        this.props.resetEntries()
    }
    render() {
        return (
            <div>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <select className='select'
                            value={this.state.activeBlogger}
                            onChange={this.onVloggerChange}
                        >
                        <option default>Choose a blogger</option>
                        {this.props.bloggers.map((blogger) => (
                            <option key={blogger.uid} value={blogger.uid}>{`${blogger.name}`}</option>
                        ))}
                        </select>
                    </div>
                    <div className='input-group__item'>
                        <input className='text-input' type='text' 
                                value={this.props.filters.text} 
                                onChange={this.onTextChange}
                                placeholder='Search expenses'
                            />
                    </div>
                    <div className='input-group__item'>
                            <DateRangePicker
                                startDate={this.props.filters.startDate}
                                startDateId='startDate'
                                endDate={this.props.filters.endDate}
                                endDateId='endDate'
                                onDatesChange={this.onDatesChange}
                                focusedInput={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                showClearDates={true}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                </div>
                <div className='page-header__title'>
                {this.props.bloggers.map((blogger) => blogger.uid === this.state.activeBlogger ? (
                    <div key={blogger.uid}>
                    <p><span>{blogger.name.split(' ')[0]}</span> has <span>{blogger.posts}</span> post{blogger.posts === 1 ? '' : 's'}</p>
                    </div>
                ) : null
                )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters,
    bloggers: state.bloggers,
    entries: state.entries,
    auth: state.auth
})

const mapDispatchtoProps = (dispatch) => ({
    getBloggerEntries: (uid) => dispatch(getBloggerEntries(uid)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    resetEntries: () => dispatch(resetEntries())
})

export default connect(mapStateToProps, mapDispatchtoProps)(BlogListFilters)