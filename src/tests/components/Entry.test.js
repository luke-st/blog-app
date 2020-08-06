import React from 'react'
import { shallow } from 'enzyme'
import { Entry } from '../../components/Entry'

test('should render Entry correctly', () => {
    const entry = {
        title: 'This is the title',
        subtitle: 'This is the subtitle',
        body: 'This is the body'
    }
    const wrapper = shallow(<Entry {...entry} />)
    expect(wrapper).toMatchSnapshot()
})
