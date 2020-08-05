import moment from 'moment'

const getVisibleEntries = (entries, filters) => {
    // return entries
    const {
        text = '', 
        startDate = 0, 
        endDate = 0
    } = filters
    return entries.filter((entry) => {
        const createdAtMoment = moment(entry.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = typeof text !== 'string' || entry.title.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1
    })
}

export default getVisibleEntries