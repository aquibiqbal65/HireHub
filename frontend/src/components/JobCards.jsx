import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'


const JobCards = () => {
    const navigate = useNavigate();
    const jobId = 'jobjavcjvskjbks';
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-gray-500 text-sm'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button></div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar className="bg-none">
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj47WLQcZqHbaoHlnDbLEH2SEJg7eOHgzTjA&s" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg'>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis similique necessitatibus aliquid repudiandae facilis ducimus adipisci architecto inventore dolores dolor.</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Badge className='text-blue-700 font-bold' variant="ghost" >Positions</Badge>
                <Badge className='text-blue-700 font-bold' variant="ghost" >Part Time</Badge>
                <Badge className='text-blue-700 font-bold' variant="ghost" >24LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/description/${jobId}`)} variant="outline" className="rounded-full text-[#079cb6] ">Details</Button>
                <Button className="rounded-full bg-[#079cb6] hover:bg-[#068399]">Save For Later</Button>
            </div>
        </div>
    )
}

export default JobCards