import { Button, Heading, Separator } from "@radix-ui/themes";
import { GithubIcon } from "lucide-react";
import DarkModeToggle from "../theme/toggle";

export default function NavBar({ title }) {
    return (
        <nav>
            <div className='h-14 border-purple flex justify-between items-center align-middle'>
                <div className='mx-4'>
                    <Heading size='7' color='blue'>{title}</Heading>
                </div>
                <div className='flex space-x-4 mx-4'>
                    <div>
                        <Button variant='surface' onClick={() => window.open("https://github.com/ethanlchristensen/ReactToDoList")}>
                            <GithubIcon strokeWidth={1.5} />
                        </Button>
                    </div>
                    <div>
                        <DarkModeToggle/>
                    </div>
                </div>
            </div>
            <Separator size='4' color='blue' />
        </nav>
    )
}