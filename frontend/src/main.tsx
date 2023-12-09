import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { CardList } from "./components/card-list";
import { CardProps } from "./components/card";
import { Login } from "./pages/login";
import { useAuthStore } from "./store";
import { Registration } from "./pages/register";
import { ContactsPage } from "./pages/contacts";
import { Company } from "./pages/companies";
import { Test } from "./pages/test";
import { Composer } from "./pages/compose";
import { Call } from "./pages/call";
import { Email } from "./pages/email";

const cards: CardProps[] = [
    {
        author: "Digital Bastion",
        date: "08.12.23",
        image: "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity-1536x947.jpg",
        link: "https://telegra.ph/Nebezopasnost-Ispolzovaniya-VPN-Riski-i-Mery-Predostorozhnosti-12-08",
        tag: "vpn",
        title: "Риски использования VPN",
    },
    {
        author: "Digital Bastion",
        date: "08.12.23",
        image: "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity-1536x947.jpg",
        link: "https://telegra.ph/Lajfhaki-dlya-Sohraneniya-Konfidencialnosti-Dannyh-Zashchitite-Svoyu-CHastnuyu-ZHizn-v-Onlajne-12-08",
        tag: "интересно",
        title: "Лайфхаки для сохранения конфиденциальности",
    },
    {
        author: "Digital Bastion",
        date: "08.12.23",
        image: "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity-1536x947.jpg",
        link: "https://telegra.ph/Luchshie-Menedzhery-Parolej-Vash-Klyuch-k-Bezopasnosti-v-Onlajne-12-08",
        tag: "важно",
        title: "Менеджеры паролей",
    },
    {
        author: "Макс",
        date: "03.11.23",
        image: "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity-1536x947.jpg",
        link: "/",
        tag: "важно",
        title: "Что такое кибербезопасность",
    },
    {
        author: "Макс",
        date: "03.11.23",
        image: "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity-1536x947.jpg",
        link: "/",
        tag: "важно",
        title: "Что такое кибербезопасность",
    },
    {
        author: "Макс",
        date: "03.11.23",
        image: "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity-1536x947.jpg",
        link: "/",
        tag: "важно",
        title: "Что такое кибербезопасность",
    },
];
const Router = () => {
    const { token } = useAuthStore();
    return (
        <Routes>
            <Route path='/' element={<CardList cards={cards} />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/info' element={<Company />} />
            <Route path='/call' element={<Call />} />
            <Route path='/email' element={<Email />} />


            {token && (
                <>
                    <Route path='/test' element={<Test />} />
                    <Route path='/compose' element={<Composer />} />
                </>
            )}
            {!token && (
                <>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Registration />} />
                </>
            )}
        </Routes>
    );
};
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    </React.StrictMode>
);
