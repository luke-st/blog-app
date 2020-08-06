import React from 'react'
import { shallow } from 'enzyme'
import { BlogListItem } from '../../components/BlogListItem'

test('should render BlogListItem correctly', () => {
    const entry = {
        title: 'This is the title',
        subtitle: 'This is the subtitle'
    }
    const wrapper = shallow(<BlogListItem {...entry} uid={'testUID'} id={'testID'} />)
    expect(wrapper).toMatchSnapshot()
})
