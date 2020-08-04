import React from 'react'
import { getBloggerEntries } from '../actions/entries'
import { connect } from 'react-redux'
import { setTextFilter, setEndDate, setStartDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'

class BlogListFilters extends React.Component {
    state = {
        calendarFocused: null
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
        this.props.getBloggerEntries(uid)
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    render() {
        return (
            <div className='input-group'>
                <div className='input-group__item'>
                    <select className='select'
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
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters,
    bloggers: state.bloggers
})

const mapDispatchtoProps = (dispatch) => ({
    getBloggerEntries: (uid) => dispatch(getBloggerEntries(uid)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchtoProps)(BlogListFilters)