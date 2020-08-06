import React from 'react'
import { shallow } from 'enzyme'
import BlogForm from '../../components/BlogForm'

test('should render BlogForm correctly', () => {
    const wrapper = shallow(<BlogForm />)
    expect(wrapper).toMatchSnapshot()
})
