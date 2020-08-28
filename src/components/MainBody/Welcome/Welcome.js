import React from 'react'
import Typical from 'react-typical';
import classes from './Welcome.module.css';
import ParticlesBg from 'particles-bg';

const welcome = (props) => (
    <div className={classes.Welcome}>
        <Typical className={classes.Text} steps={['Welcome', 3000, 'Scroll down for more, or use the Navigation above and check out the external links', 5000]}
            loop={Infinity}
            wrapper="h2" />
        <ParticlesBg type="square" bg={true} />
    </div>
);

export default welcome;