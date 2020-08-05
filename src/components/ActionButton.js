import React from 'react'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/icon/';

const ActionButton = (props, classes) => (
    <div className='fab-container'>
        <Fab color="primary" aria-label="add" className={classes.margin}>
            <Icon style={{ fontSize: '3rem' }}>create</Icon>
        </Fab>
    </div>
)

export default ActionButton