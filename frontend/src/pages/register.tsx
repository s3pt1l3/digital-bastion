import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store";

export function Registration() {
    const navigate = useNavigate();
    const { register } = useAuthStore();
    const handleSubmit = (e) => {
        e.preventDefault();
        register(loginvalue, email, password).then((res) => {
            // console.log(res);
            if (res === 201) {
                navigate("/");
            }
        });
    };
    const [loginvalue, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [password2, setPassword2] = useState("");

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col bg-white rounded-lg gap-5 p-5 w-2/5'>
                <h2 className='font-bold text-3xl justify-center flex'>
                    Регистрация
                </h2>
                <form className='flex flex-col gap-3'>
                    <label>Логин</label>
                    <input
                        onChange={(e) => {
                            setLogin(e.target.value);
                        }}
                        value={loginvalue}
                        type='text'
                        className='border-gray-500 border-2 rounded-md p-1'
                    />
                    <label>E-mail</label>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        type='text'
                        className='border-gray-500 border-2 rounded-md p-1'
                    />
                    <label>Пароль</label>
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        type='password'
                        className='border-gray-500 border-2 rounded-md p-1'
                    />
                    <label>Введите пароль еще раз</label>
                    <input
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}
                        value={password2}
                        type='password'
                        className='border-gray-500 border-2 rounded-md p-1'
                    />
                    {password !== password2 && (
                        <span className='text-red-600'>
                            Пароли не совпадают
                        </span>
                    )}
                    <button
                        type='submit'
                        className='flex justify-center hover:scale-105 transition-all ease-in bg-btn rounded-lg items-center p-1 text-white'
                        onClick={handleSubmit}
                    >
                        Зарегистрироваться
                    </button>
                </form>

                <Link className='flex justify-center underline' to={"/login"}>
                    У меня есть аккаунт
                </Link>
            </div>
        </div>
    );
}
