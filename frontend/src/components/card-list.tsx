import { useNavigate } from "react-router-dom";
import { Card, CardProps } from "./card";

export function CardList({ cards }: { cards: CardProps[] }) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col w-full items-center gap-11'>
            <div className='flex flex-col gap-5 bg-white items-center w-2/3 rounded-md p-5'>
                <span className='text-lg font-bold '>
                    Пройдите входной тест для оценки ваших навыков
                </span>
                <span className='text-red-700 text-lg'>
                    Оцените свой уровень знаний!
                </span>
                <button
                    onClick={() => navigate("/test")}
                    className='bg-btn text-white px-5 py-1 rounded'
                >
                    Вперед!
                </button>
            </div>
            <div className='flex w-full justify-center'>
                <div className='flex flex-col gap-2 px-4 w-11/12 md:flex-row md:flex-wrap md:gap-9 md:justify-center'>
                    {cards.map((value, index) => (
                        <Card key={index} {...value} />
                    ))}
                </div>
            </div>
        </div>
    );
}
