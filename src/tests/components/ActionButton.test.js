import React from 'react'
import { shallow } from 'enzyme'
import { ActionButton } from '../../components/ActionButton'

test('should render ActionButton correctly', () => {
    const wrapper = shallow(<ActionButton />)
    expect(wrapper).toMatchSnapshot()
})
