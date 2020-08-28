import React from 'react';
import Project from '../../Reusuable/Project/Project';
import projectList from '../../../ProjectList.json';
import Typical from 'react-typical';
import classes from './Projects.module.css';

const projects = (props) => {
    return (
        <div>
            <span>
                <Typical steps={['Projects', 5000, 'Work Done', 5000]}
                    loop={Infinity}
                    wrapper="h1" />
            </span>
            <div className={classes.Projects}>
                {projectList.map((proj, key) => (
                    <Project key={key}
                        image={proj.image}
                        title={proj.title}
                        description={proj.description}
                        link={proj.link} />
                ))}
            </div>
        </div>
    );
}

export default projects;