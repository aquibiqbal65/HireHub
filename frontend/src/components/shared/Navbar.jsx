import { LogOut, User2 } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Link } from "react-router-dom"

const Navbar = () => {
    const user = true
    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <Link to="/"><h1 className="text-2xl font-bold">Hire<span className="text-[#ff2b2b]">Hub</span></h1></Link>
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex font-semibold items-center gap-5 cursor-pointer">
                        <li className="hover:text-[#079cb6] transition-all duration-200">Home</li>
                        <li className="hover:text-[#079cb6] transition-all duration-200">Jobs</li>
                        <li className="hover:text-[#079cb6] transition-all duration-200">Browse</li>
                    </ul>

                    {
                        !user ? (
                            <div className="flex items-center gap-2">
                                <Link to="/login">
                                    <Button variant="outline">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-[#079cb6] hover:bg-[#0d7a8d] text-white" variant="primary">Signup</Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div>
                                        <div className="flex gap-4 space-y-2">
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className="font-medium">Aquib Iqbal</h4>
                                                <p className="text-sm text-muted-foreground">lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col my-2 text-gray-600">
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <User2 />
                                                <Button variant="link">View Profile</Button>
                                            </div>
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <LogOut />
                                                <Button variant="link">logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar