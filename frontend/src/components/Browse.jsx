import React from 'react'
import Navbar from './shared/Navbar'
import JobCards from './JobCards';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-semibold mb-10'>Search Results: ({randomJobs.length})</h1>
                <div className='grid grid-cols-3 gap-3'>{
                    randomJobs.map((item, index) => {
                        return (
                            <JobCards />
                        )
                    })
                }</div>

            </div>
        </div>
    )
}

export default Browse