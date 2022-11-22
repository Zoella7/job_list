import {JobComponent, JobDetails} from "./components";
import {Routes, Route, Navigate} from "react-router-dom";


function App() {
    return (
        <Routes>

            <Route path={'jobs'} element={<JobComponent/>}/>
            <Route index element={<Navigate to={'jobs'}/>}/>
            <Route path={'jobs/details'} element={<JobDetails/>}/>

        </Routes>


    );
}

export default App;
