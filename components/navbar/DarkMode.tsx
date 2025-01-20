'use client';

import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {
    DropdownMenuTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import {Moon, Sun} from "lucide-react";
import {TbSunMoon} from "react-icons/tb";

const DarkMode = () => {
    const {theme, setTheme} = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun
                        className={`h-[1.2rem] w-[1.2rem] transition-all ${
                            theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                        }`}
                    />
                    <Moon
                        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                            theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                        }`}
                    />
                    <TbSunMoon
                        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                            theme === "system" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                        }`}
                    />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun />&nbsp;Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon/>&nbsp;Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <TbSunMoon />&nbsp;System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default DarkMode;