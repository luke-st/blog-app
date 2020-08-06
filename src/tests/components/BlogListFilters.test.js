import React from 'react'
import { shallow } from 'enzyme'
import { BlogListFilters } from '../../components/BlogListFilters'

test('should render BlogListFilters correctly', () => {
    const getBloggerEntries = jest.fn()
    const wrapper = shallow(<BlogListFilters auth={{uid: ''}} bloggers={[]} filters={{text: ''}} getBloggerEntries={getBloggerEntries}/>)
    expect(wrapper).toMatchSnapshot()
})
