import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        uid: ''
    })
})

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE', 
        date: moment().startOf('week')
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(action.date)
})

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        date: moment().endOf('week')
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(action.date)
})

test('should set endDate filter', () => {
    const action = {
        type: 'SET_UID',
        uid: 'testUID'
    }
    const state = filtersReducer(undefined, action)
    expect(state.uid).toBe(action.uid)
})