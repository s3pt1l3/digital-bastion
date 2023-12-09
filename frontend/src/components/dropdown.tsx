import { HTMLAttributes, useState } from "react";
import { Link } from "react-router-dom";

interface Link {
    title: string;
    url: string;
}

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    links: Link[];
}

export function Dropdown({ links, label }: DropdownProps) {
    const [isopen, setIsopen] = useState(false);
    const handleOpen = () => setIsopen(!isopen);
    return (
        <div>
            <button className='flex items-center' onClick={handleOpen}>
                <span>{label}</span>
                <span
                    className={
                        "material-symbols-outlined h-min self-center transition-all duration-150 ease-out " +
                        `${isopen && "rotate-180"}`
                    }
                >
                    expand_more
                </span>
            </button>

            <div className='absolute flex flex-col gap-1  bg-white rounded'>
                {isopen &&
                    links.map((value) => (
                        <Link
                            key={value.url}
                            to={value.url}
                            className='hover:bg-slate-300 transition-all duration-100 rounded p-2'
                        >
                            {value.title}
                        </Link>
                    ))}
            </div>
        </div>
    );
}
