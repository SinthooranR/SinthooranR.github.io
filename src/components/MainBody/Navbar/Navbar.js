import React from 'react';
import classes from './Navbar.module.css';
import NavItem from '../../Reusuable/NavItem/NavItem';
import Typical from 'react-typical';
import logo from '../../../assets/logo/react.gif';
import { GitHub, LinkedIn, PictureAsPdfSharp } from '@material-ui/icons';
import Resume from '../../../assets/Sinthooran_Ravinathan_Resume.pdf';

const navbar = () => {
    return (
        <header className={classes.Navbar}>
            <div>
                <img src={logo} alt='logo' />
            </div>

            <span className="myName">
                <Typical steps={['Sinthooran Ravinathan', 5000, 'Computer Science Graduate', 5000]}
                    loop={Infinity}
                    wrapper="h3" />
            </span>

            <nav>
                <div>
                    <GitHub fontSize="large" />
                    <NavItem item="Github" link="https://github.com/SinthooranR" />
                </div>
                <div>
                    <LinkedIn fontSize="large" />
                    <NavItem item="LinkedIn" link="https://www.linkedin.com/in/sinthooranravinathan/" />
                </div>
                <div>
                    <PictureAsPdfSharp fontSize="large" />
                    <NavItem item="Resume" link={Resume} />
                </div>
            </nav>
        </header>
    );
};

export default navbar;

