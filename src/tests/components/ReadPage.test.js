import React from 'react'
import { shallow } from 'enzyme'
import { ReadPage } from '../../components/ReadPage'

test('should render ReadPage correctly', () => {
    const getEntry = jest.fn()
    const wrapper = shallow(<ReadPage auth={{uid: 'testUID'}} match={{params: {uid: 'postUID', id: 'postID'}}} getEntry={getEntry}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ReadPage correctly with edit button', () => {
    const getEntry = jest.fn()
    const wrapper = shallow(<ReadPage auth={{uid: 'postUID'}} match={{params: {uid: 'postUID', id: 'postID'}}} getEntry={getEntry}/>)
    expect(wrapper).toMatchSnapshot()
})