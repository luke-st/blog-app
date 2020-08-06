import React from 'react'
import { shallow } from 'enzyme'
import { BlogList } from '../../components/BlogList'

test('should render BlogList correctly', () => {
    const wrapper = shallow(<BlogList entries={[]} auth={{uid: ''}} />)
    expect(wrapper).toMatchSnapshot()
})
