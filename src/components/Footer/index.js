import React from 'react';
import { Typography } from '@material-ui/core';

import resumeData from '../../utils/resumeData';

import './index.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'>{resumeData.name}</Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    Designed and Developed by {" "}
                    <a href='/' target='_blank'>
                        Kilsoon Kim
                    </a>
                    <br />
                    Clone idea from {" "}
                    <a href='https://themeforest.net/user/tavonline' target='_blank' rel="noreferrer">
                        Tavonline
                    </a>
                </Typography>
            </div>
        </div>
    );
}

export default Footer;