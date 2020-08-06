import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

test('should render Header correctly', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} auth={{}}/>)
    expect(wrapper).toMatchSnapshot()
})