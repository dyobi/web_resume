import React from 'react';
import {
    // Button,
    // Form,
    // FormControl,
    Nav,
    Navbar,
    // NavDropdown
} from 'react-bootstrap';
import {
    HomeRounded,
    // SchoolRounded,
    // WorkRounded,
    // GitHub,
    Telegram
} from '@material-ui/icons';
import { NavLink, withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button';

import './index.css';

const Header = (props) => {
    const pathName = props?.location?.pathname;

    return (
        <Navbar expand='lg' sticky='top' className='header'>
            {/* HomeLink */}
            <Nav.Link as={NavLink} to='/' className={'p-0 m-0'}>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header_left'>
                    {/* Resume Link */}
                    <Nav.Link
                        as={NavLink}
                        to='/'
                        className={pathName === '/' ? 'header_link_active' : 'header_link'}>
                        RESUME
                    </Nav.Link>

                    {/* Portfolio Link */}
                    <Nav.Link
                        as={NavLink}
                        to='/portfolio'
                        className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>
                        PORTFOLIO
                    </Nav.Link>
                </Nav>

                <div className='header_right'>
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].link} target='_blank' rel="noreferrer">{resumeData.socials[key].icon}</a>
                    ))}
                    <CustomButton text={'Hire Me'} icon={<Telegram />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Header);