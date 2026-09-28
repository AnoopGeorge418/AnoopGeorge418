
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

export const NavBar = () => {
	return (
		<div className="w-[70%] h-20 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.10)] md:mt-5 p-2 justify-between items-center md:pl-10 md:pr-10 hidden md:flex">
            {/*logo*/}
            <Link href="/" className="justify-center items-center flex-row space-x-1 cursor-pointer hidden md:flex">
                <Image src="/logo.png" alt="logo" width={20} height={20} />
                <h1 className="font-lora text-2xl font-black uppercase tracking-widest">Anoop George</h1>
            </Link>

            {/*Items*/}
            <div className="flex flex-row space-x-10 list-none uppercase text-gray-500">
                <li className="font-mono cursor-pointer hover:underline tracking-widest hidden md:block">Works</li>
                <li className="font-mono cursor-pointer hover:underline tracking-widest hidden md:block">About</li>
                <li className="font-mono cursor-pointer hover:underline tracking-widest hidden md:block">Services</li>
                <li className="font-mono cursor-pointer hover:underline tracking-widest hidden md:block">Stacks</li>
                <li className="font-mono cursor-pointer hover:underline tracking-widest hidden md:block">Blogs</li>
            </div>

            {/*links*/}
            <div className="flex flex-row space-x-10 justify-center items-center">
                <Link href="https://github.com/AnoopGeorge418">
                    <FaGithub className="h-7 w-7 rounded-full hidden md:flex"/>
                </Link>
                <Link href="https://www.linkedin.com/in/anoop-george418/">
                    <ImLinkedin className="h-7 w-7 hidden md:flex"/>
                </Link>
                {/*<Button className="cursor-pointer">Get In Touch</Button>*/}
                <Button className={"cursor-pointer h-10 w-40 tracking-widest uppercase hidden md:flex"}>
                    Get In Touch
                </Button>
            </div>
		</div>
	);
};
