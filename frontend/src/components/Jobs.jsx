import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import JobCards from './JobCards'
import Footer from './Footer'

const JobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        JobsArray.length <= 0 ? <span className=''>Jobs not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {
                                        JobsArray.map((item, index) => (
                                            <div>
                                                <JobCards />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Jobs