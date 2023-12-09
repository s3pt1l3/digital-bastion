import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store";

export function Login() {
    const navigate = useNavigate();
    const { login, token } = useAuthStore();
    const handleSubmit = (e) => {
        e.preventDefault();
        login(loginvalue, password);
        navigate("/");
    };
    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [navigate, token]);
    const [loginvalue, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col bg-white rounded-lg gap-5 p-5 w-2/5'>
                <h2 className='font-bold text-3xl justify-center flex'>
                    Войти
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
                    <label>Пароль</label>
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        type='password'
                        className='border-gray-500 border-2 rounded-md p-1'
                    />
                    <button
                        type='submit'
                        className='flex justify-center hover:scale-105 transition-all ease-in bg-btn rounded-lg items-center p-1 text-white'
                        onClick={handleSubmit}
                    >
                        Войти
                    </button>
                </form>

                <Link
                    className='flex justify-center underline'
                    to={"/register"}
                >
                    Нет аккаунта
                </Link>
            </div>
        </div>
    );
}
