import { useEffect, useState } from "react";
import { BurgerMenu } from "./burger-menu";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Dropdown } from "./dropdown";
import { useAuthStore } from "../store";
export function Header() {
    const { token } = useAuthStore();
    const [open, setOpen] = useState(false);
    const onOpen = () => {
        setOpen(!open);
    };
    useEffect(() => {
        console.log(token);
    });
    return (
        <div className="">
            <div className='flex flex-row justify-between items-center h-24 px-7'>
                <div className='text-lg flex justify-between w-full'>
                    <div>
                        <a href='/'>
                            <img className='h-11 overflow-hidden' src={Logo} />
                        </a>
                    </div>

                    <div className='hidden md:visible md:flex gap-7 md:items-center'>
                        <Dropdown
                            label='О нас'
                            links={[
                                { title: "Контакты", url: "/contacts" },
                                { title: "Для компаний", url: "/info" },
                            ]}
                        />
                        <a
                            className='hover:scale-105 transition-all ease-in'
                            href='https://t.me/DGbastion'
                            target='_blank'
                        >
                            Блог
                        </a>
                        {token ? (
                            <>
                                <Link
                                    className='bg-btn text-white hover:scale-105 transition-all ease-in  rounded flex items-center p-1 '
                                    to={"/compose"}
                                >
                                    Конструктор
                                </Link>
                                <Link
                                    className='hover:scale-105 transition-all ease-in bg-btn rounded flex items-center p-1 text-white'
                                    to={"/write"}
                                >
                                    Написать статью
                                </Link>
                            </>
                        ) : (
                            <Link
                                className='hover:scale-105 transition-all ease-in bg-btn rounded flex items-center p-1 text-white'
                                to={"/login"}
                            >
                                Войти
                            </Link>
                        )}
                    </div>
                </div>

                <div className='md:hidden'>
                    <BurgerMenu openCallback={onOpen} />
                </div>
            </div>
            <div
                className={`${
                    open ? "visible" : "hidden"
                } flex px-7 gap-5 transition-all duration-500 ease-in-out pb-2 md:justify-center`}
            >
                <div className='flex flex-col gap-5 md:items-center'>
                    <Dropdown
                        label='О нас'
                        links={[
                            { title: "Контакты", url: "/contacts" },
                            { title: "Для компаний", url: "/info" },
                        ]}
                    />
                    <Link
                        className='hover:scale-105 transition-all ease-in'
                        to={"/blog"}
                    >
                        Блог
                    </Link>
                    {token ? (
                        <>
                            <Link
                                className='hover:scale-105 transition-all ease-in bg-btn rounded flex items-center p-1 text-white'
                                to={"/write"}
                            >
                                Написать статью
                            </Link>
                            <Link
                                className='bg-btn justify-center text-white hover:scale-105 transition-all ease-in  rounded flex items-center p-1 '
                                to={"/compose"}
                            >
                                Конструктор
                            </Link>
                        </>
                    ) : (
                        <Link
                            className='hover:scale-105 transition-all ease-in bg-btn rounded flex items-center p-1 text-white'
                            to={"/login"}
                        >
                            Войти
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
