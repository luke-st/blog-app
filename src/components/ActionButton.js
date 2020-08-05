import React from 'react'
import Fab from '@material-ui/core/Fab'
import CreateIcon from '@material-ui/icons/Create';

const ActionButton = (props, classes) => (
    <div className='fab-container'>
        <Fab color="primary" aria-label="add" className={classes.margin}>
            <CreateIcon />
        </Fab>
    </div>
)

export default ActionButton