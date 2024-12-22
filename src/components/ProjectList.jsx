import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/api';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects().then(res => setProjects(res.data));
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold">Project List</h2>
            {projects.map(project => (
                <div key={project._id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
