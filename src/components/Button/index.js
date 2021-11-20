import React from 'react';
import { Button } from '@material-ui/core';

import './index.css';

const CustomButton = ({ text, icon }) => {
    return (
        <Button
            className='custom_btn'
            endIcon={icon ? (<div className='btn_icon_container'>{icon}</div>) : null}>
            <span className='btn_text'>
                {text}
            </span>
        </Button>
    );
}

export default CustomButton;