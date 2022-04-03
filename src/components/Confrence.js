import React, { useState } from 'react'
import Button from '@mui/material/Button';

import './Confrence.css'
import CustomizedTables from './CustomizedTables';
import TransitionsModal from './TransitionsModal'

export const Confrence = () => {
  return (
    <div className="confrence">
        <div className="center">
            <TransitionsModal/>
        </div>
        <div className="styleTable"><CustomizedTables/></div>
    </div>
  )
}
