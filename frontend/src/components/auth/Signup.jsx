import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import {  Toaster } from '../ui/sonner'
import { Button } from '../ui/button'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const navigate = useNavigate();
    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({...input, file:e.target.files?.[0] });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('password', input.password);
        formData.append('role', input.role);
        if(input.file){
            formData.append('file', input.file);
        }
        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            } )
            if(res.data.success) {
                navigate("/login")
                Toaster.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            Toaster.error(error.response.message);

        }
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-xl shadow-xl p-20 my-10'>
                    <h1 className='font-bold text-xl mb-5 text-center'>Create an account</h1>
                    <div className='my-4'>
                        <label className=''>Full Name</label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className='my-4'>
                        <label>Email</label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="email@gmail.com"
                            required
                        />
                    </div>
                    <div className='my-4'>
                        <label>Phone Number</label>
                        <Input
                            type="number"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="+91"
                            required
                        />
                    </div>
                    <div className='my-4'>
                        <label>Password</label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className='flex items-center gap-x-12 justify-center'>
                        <RadioGroup defaultValue="comfortable" className="flex py-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    value="recruiter"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="flex items-center mt-12">
                        <Checkbox className="mr-2" id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    <Button className='mt-4 py-2 w-full text-white font-semibold bg-[#079cb6] rounded-lg transition-all duration-300 hover:bg-[#078da5]'
                    type="submit">
                        Signup
                    </Button>
                    <div className='font-medium mt-4 flex justify-center'>
                        <span>Already have an account? <Link to="/login" className='text-[#079cb6] hover:underline'>Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup