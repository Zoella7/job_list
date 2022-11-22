import React, {useEffect, useState} from 'react';
import {DetailComponent} from "./Job_Component";
import {getJobs} from "./services";


const JobComponent = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        getJobs().then(value => setJobs([...value]))
    }, [])

    return (
        <div>
            <h3 className="text-3xl font-mono">Job Board</h3>
            {jobs.map(job => <DetailComponent key={job.id} job={job}/>)}

        </div>
    )
}

export {JobComponent}