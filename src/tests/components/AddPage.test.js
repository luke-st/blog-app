import React from 'react'
import { shallow } from 'enzyme'
import { AddPage } from '../../components/AddPage'

test('should render AddPage correctly', () => {
    const wrapper = shallow(<AddPage auth={{uid: ''}} />)
    expect(wrapper).toMatchSnapshot()
})
