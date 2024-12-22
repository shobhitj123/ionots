import React, { useState } from 'react';
import { updateProjectProgress } from '../../services/api';

function ProgressTracker({ projectId }) {
    const [status, setStatus] = useState('');
    const [score, setScore] = useState(0);

    const handleUpdate = () => {
        updateProjectProgress(projectId, { status, score });
    };

    return (
        <div>
            <input placeholder="Status" onChange={e => setStatus(e.target.value)} />
            <input type="number" placeholder="Score" onChange={e => setScore(e.target.value)} />
            <button onClick={handleUpdate}>Update Progress</button>
        </div>
    );
}

export default ProgressTracker;
