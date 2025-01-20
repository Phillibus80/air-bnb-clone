import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {LuAlignLeft} from "react-icons/lu";
import UserIcon from "@/components/navbar/UserIcon";
import {links} from "@/utils/links";

const LinksDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex gap-4 max-w-[100px]'>
                    <LuAlignLeft className='w-6 h-6'/>
                    <UserIcon/>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
                {links.map(
                    ({href: linkURL, label}) =>
                        <DropdownMenuItem key={label}>
                            <Link href={linkURL} className='capitalize w-full'>
                                {label}
                            </Link>
                        </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LinksDropdown;