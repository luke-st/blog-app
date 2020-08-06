import getVisibleEntries from '../../selectors/entries'
import defaultStoreData from '../fixtures/store'

test('should return entries that fall into filters criteria', () => {
    const entryData = defaultStoreData.users.usertwo.posts 
    const entries = [entryData[1], entryData[3], entryData[2]]
    const filters = {
        text: '', 
        startDate: 0, 
        endDate: 0
    }
    const result = getVisibleEntries(entries, filters)
    expect(result).toEqual(entries)
})