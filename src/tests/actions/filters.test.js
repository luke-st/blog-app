import { setStartDate, setEndDate, setTextFilter, setUID } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should generate set UID action object', () => {
    const uid = 'testUID'
    const action = setUID(uid)
    expect(action).toEqual({
        type: 'SET_UID',
        uid
    })
})

test('should generate set text filter action object with provided string', () => {
    const action = setTextFilter('this is a test filter')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'this is a test filter'
    })
})

test('should generate set text filter action object with default string (empty)', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})