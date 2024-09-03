import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkIcon, LogOut } from 'lucide-react'



const Header = () => {

    const navigate = useNavigate();
    const user = true;
    return (
        <nav className='py-4 flex justify-between items-center'>
            <Link to="/">
                <img src={logo} alt="URL-Shortener Logo" className='h-16' />
                {/* <img src= "src/assets/logo.jpeg" alt="URL-Shortener Logo" className='h-16'/> */}
            </Link>

            <div>
                {!user ?
                    <Button onClick={() => navigate("/auth")}>Login</Button>
                    : (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    <LinkIcon />
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    My Links
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-400">
                                    <LogOut className='mr-2 h-4 w-4'/>
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    )
                }
            </div>
        </nav>
    )
}

export default Header