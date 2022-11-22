import React from 'react';
import {useLocation} from "react-router-dom";

const JobDetails = () => {


    const {state} = useLocation();
    const {name, title, salary, address, description} = state

    return (
        <div>
            <h3 className="text-3xl font-mono">Job Details</h3>
            <hr/>

            <button className='mt-10 bg-slate-500 bg-opacity-60 block mx-auto py-2 px-14 rounded-xl hover:bg-opacity-100'>Apply now</button>
            <div>
            <h2 className='text-xl font-serif text-center font-bold my-3'>{name}/{title}</h2>
            <div className='text-xl font-serif justify-end'>Salary:{salary}</div>
            </div>
            <h2>{address}</h2>
            <p className=' text-xl font-serif my-3 text-gray-900 px-2'>{description}</p>
            <h3 className='text-xl font-bold my-5'>Additional info</h3>
            <hr/>
            <p className='font-bold text-black'>Employment type</p>
            <div className='flex'>
            <button className='mt-10 bg-slate-500 bg-opacity-60 block mx-auto py-2 px-14 rounded-xl flex'>Full time</button>
            <button className='mt-10 bg-slate-500 bg-opacity-60 block mx-auto py-2 px-14 rounded-xl flex'>Part time</button>
            <button className='mt-10 bg-slate-500 bg-opacity-60 block mx-auto py-2 px-14 rounded-xl flex'>Temporary</button>
            </div>
        </div>
    );
};

export {JobDetails};