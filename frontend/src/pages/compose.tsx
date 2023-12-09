import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Composer() {
    const [open, setOpen] = useState(false);
    const [option, setOption] = useState("");
    const navigate = useNavigate();
    return (
        <div className='flex justify-center'>
            <div className='flex-col md:flex-row flex w-full md:w-[90%] pt-10 md:justify-between justify-center'>
                <div className='flex flex-col w-full md:w-3/12 shrink-0  gap-7 bg-white p-5 rounded-md'>
                    <div
                        onClick={() => {
                            setOpen(true);
                            setOption("Звонок");
                        }}
                        className='flex rounded-md border-gray-500 border-2 py-2 px-2 hover:bg-btn hover:text-white transition-all duration-300 cursor-pointer'
                    >
                        1. Звонок
                    </div>
                    <div
                        onClick={() => {
                            setOpen(true);
                            setOption("Почта");
                        }}
                        className='flex rounded-md border-gray-500 border-2 py-2 px-2 hover:bg-btn hover:text-white transition-all duration-300 cursor-pointer'
                    >
                        2. Почта
                    </div>
                    <div
                        onClick={() => {
                            setOpen(true);
                            setOption("Телеграм");
                        }}
                        className='flex rounded-md border-gray-500 border-2 py-2 px-2 hover:bg-btn hover:text-white transition-all duration-300 cursor-pointer'
                    >
                        3. Телеграм
                    </div>
                </div>
                {open && (
                    <div className='flex flex-col w-full md:w-8/12 bg-white rounded-md'>
                        <span className='flex justify-start items-center p-2 bg-btn w-min rounded-tl-md rounded-br-md text-white'>
                            {option}
                        </span>
                        <div className='flex gap-10 h-full justify-center'>
                            <div className='flex flex-col w-[90%] md:w-7/12 justify-around h-full'>
                                <div className='flex justify-between gap-x-28'>
                                    <div className='flex md:w-full'>
                                        Сценарий
                                    </div>
                                    <div className='flex w-full'>
                                        <select className='outline-none border-btn border-[1px] rounded w-full'>
                                            <option>Банк</option>
                                            <option>Для компаний</option>
                                            <option>Соц. Сеть</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div className='flex w-full justify-between gap-x-28'>
                                    <div className='flex w-full'>
                                        Введите {option}
                                    </div>
                                    <div className='flex w-full h-min '>
                                        <input
                                            type='text'
                                            className='px-2 outline-none border-btn border-[1px] rounded w-full'
                                        />
                                    </div>
                                </div> */}
                                {/* <div className='flex w-full justify-between gap-x-28'>
                                    <div className='flex w-full'>
                                        Введите имя
                                    </div>
                                    <div className='flex w-full h-min '>
                                        <input
                                            type='text'
                                            className='px-2 outline-none border-btn border-[1px] rounded w-full'
                                        />
                                    </div>
                                </div> */}
                                <div className='flex self-end'>
                                    <button
                                        onClick={() => {
                                            switch (option) {
                                                case "Почта":
                                                    navigate("/email");
                                                    break;

                                                default:
                                                    navigate("/call");
                                                    break;
                                            }
                                        }}
                                        className='text-white bg-btn p-1 rounded'
                                    >
                                        Готово
                                    </button>
                                </div>
                                <p className='self-center font-bold'>
                                    Ответ придет вам на почту, указанную в
                                    профиле.
                                </p>
                            </div>
                            <div className='flex flex-col justify-around h-full'></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
