import moment from 'moment'

//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    uid: ''
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        case 'SET_UID':
            return {
                ...state,
                uid: action.uid
            }
        default:
            return state
    }
}

export default filtersReducer