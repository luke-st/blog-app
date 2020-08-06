import React from 'react'
import { shallow } from 'enzyme'
import { EditPage } from '../../components/EditPage'

test('Should render EditPage correctly', () => {
    const wrapper = shallow(<EditPage auth={{uid: 'testUID'}} />)
    expect(wrapper).toMatchSnapshot()
})
