import { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

import { RadioGroup } from '../ui/radio-group'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            })
            if (res.data.success) {
                navigate("/")
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border-none rounded-xl shadow-xl p-20 my-10'>
                    <h1 className='font-bold text-2xl  mb-5 text-center'>Login</h1>
                    <div className='my-4'>
                        <label>Email</label>
                        <Input
                            className='border-none rounded-xl mt-2 shadow-md shadow-gray-200'
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="email@gmail.com"
                            required
                        />
                    </div>
                    <div className='my-4'>
                        <label>Password</label>
                        <Input
                            className='border-none rounded-xl mt-2 shadow-md shadow-gray-200'
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className='flex items-center'>
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
                    </div>

                    <div className="flex items-center mt-4">
                        <Checkbox className="mr-2" id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    {
                        loading ? <Button className='mt-4 py-2 w-full text-white font-semibold rounded-lg'> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait... </Button> : <Button className='mt-4 py-2 w-full text-white font-semibold bg-[#079cb6] rounded-lg transition-all duration-300 hover:bg-[#078da5]'
                            type="login">
                            Login
                        </Button>
                    }

                    <div className='font-medium mt-4 flex justify-center'>
                        <span>Don't have an account? <Link to="/signup" className='text-[#079cb6] hover:underline'>Signup</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login