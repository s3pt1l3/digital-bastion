import { useState } from "react";
import "../index.css";

interface MenuProps {
    openCallback: () => void;
}

export function BurgerMenu({ openCallback }: MenuProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
        openCallback();
    };
    return (
        <button onClick={handleOpen}>
            <span className='material-symbols-outlined'>menu</span>
            {/* {open ? <div>asdasd</div> : null} */}
        </button>
    );
}
