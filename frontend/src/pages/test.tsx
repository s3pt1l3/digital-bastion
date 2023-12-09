import { useEffect, useState } from "react";

const quiz = {
    topic: "cybersecurity",
    level: "Beginner",
    totalQuestions: 11,
    perQuestionScore: 5,
    questions: [
        {
            question: 'Что такое "фишинг"?',
            choices: [
                "Способ ловли рыбы.",
                "Вид компьютерных игр.",
                "Вид кибератаки, при которой злоумышленники пытаются обмануть вас, чтобы получить вашу личную информацию.",
            ],
            type: "MCQs",
            correctAnswer:
                "Вид кибератаки, при которой злоумышленники пытаются обмануть вас, чтобы получить вашу личную информацию.",
        },
        {
            question: "Как вы создаете сильный пароль?",
            choices: [
                "Использую простые слова, которые легко запомнить.",
                "Использую свои личные данные, такие как дата рождения.",
                "Использую комбинацию букв в верхнем и нижнем регистрах, цифр и спецсимволов.",
            ],
            type: "MCQs",
            correctAnswer:
                "Использую комбинацию букв в верхнем и нижнем регистрах, цифр и спецсимволов.",
        },
        {
            question: 'Что такое "вредоносное ПО" или "малварь"?',
            choices: [
                "Программы, созданные для улучшения производительности компьютера.",
                "Вирус, вызывающий физические проблемы с компьютером.",
                "Программы, разработанные для вторжения в ваш компьютер и нанесения ущерба.",
            ],
            type: "MCQs",
            correctAnswer:
                "Программы, разработанные для вторжения в ваш компьютер и нанесения ущерба.",
        },
        {
            question:
                'Что означает "безопасная передача данных по Интернету" (SSL)?',
            choices: [
                "Вид безопасной электронной почты.",
                "Протокол шифрования, который обеспечивает безопасную передачу данных между вами и веб-сайтом.",
                "Вид беспроводной сети.",
            ],
            type: "MCQs",
            correctAnswer:
                "Протокол шифрования, который обеспечивает безопасную передачу данных между вами и веб-сайтом.",
        },
        {
            question:
                "Как можно защитить свою беспроводную сеть от несанкционированного доступа?",
            choices: [
                "Использовать слабый пароль",
                "Оставлять сеть открытой без пароля.",
                "Использовать сильные пароли и включить шифрование.",
            ],
            type: "MCQs",
            correctAnswer: "Использовать сильные пароли и включить шифрование.",
        },
        {
            question: 'Что такое "двухфакторная аутентификация"?',
            choices: [
                "Введение двух разных паролей.",
                "Дополнительный слой безопасности, требующий не только знания пароля, но и доступа к дополнительному устройству.",
                "Использование одного пароля на два аккаунта",
            ],
            type: "MCQs",
            correctAnswer:
                "Дополнительный слой безопасности, требующий не только знания пароля, но и доступа к дополнительному устройству.",
        },
        {
            question:
                "Какие действия следует предпринимать при получении подозрительного электронного письма?",
            choices: [
                "Кликнуть на вложенную ссылку, чтобы проверить информацию.",
                "Переслать письмо друзьям для уточнения.",
                "Не открывать вложения или ссылки, сообщить об инциденте службе поддержки",
            ],
            type: "MCQs",
            correctAnswer:
                "Не открывать вложения или ссылки, сообщить об инциденте службе поддержки",
        },
        {
            question:
                "Какие меры безопасности следует предпринимать при использовании общего компьютера (например, в интернет-кафе)?",
            choices: [
                "Сохранять пароли в текстовом файле на рабочем столе.",
                "Использовать режим инкогнито в браузере",
                "Публично обсуждать личные данные в интернете",
            ],
            type: "MCQs",
            correctAnswer: "Использовать режим инкогнито в браузере",
        },
        {
            question: 'Что означает "обновление программного обеспечения"?',
            choices: [
                "Откат к предыдущей версии программы",
                "Приостановка использования программы",
                "Установка последних версий программ и патчей для устранения уязвимостей.",
            ],
            type: "MCQs",
            correctAnswer:
                "Установка последних версий программ и патчей для устранения уязвимостей.",
        },
        {
            question:
                "Почему важно регулярно создавать резервные копии данных?",
            choices: [
                "Для освобождения места на жестком диске.",
                "Для защиты данных от потери в случае сбоя жесткого диска, вирусных атак или других непредвиденных ситуаций.",
                "Резервные копии не являются важными для безопасности данных.",
            ],
            type: "MCQs",
            correctAnswer:
                "Для защиты данных от потери в случае сбоя жесткого диска, вирусных атак или других непредвиденных ситуаций.",
        },
        {
            question:
                "Укажите ваш возраст (необходимо для определения полезных статей для вас).",
            choices: ["6-12", "13-29", "30-90+"],
            type: "MCQs",
            correctAnswer: "",
        },
    ],
};

export const Test = () => {
    // useEffect(() => {
    //     document.documentElement.style.setProperty("--bg-color", '');
    //     return () => {
    //         document.documentElement.style.setProperty("--bg-color", "#FDFDFD");
    //     };
    // });
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = quiz;
    const { question, choices, correctAnswer } = questions[activeQuestion];

    const onClickNext = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) =>
            selectedAnswer
                ? {
                      ...prev,
                      score: prev.score + 5,
                      correctAnswers: prev.correctAnswers + 1,
                  }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        );
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }
    };

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index);
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false);
        }
    };

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

    return (
        <div className='flex w-full flex-col gap-10 items-center '>
            {!showResult ? (
                <div className='text-lg flex flex-col gap-5 w-[90%] md:w-1/2'>
                    <div>
                        <span className='active-question-no'>
                            {addLeadingZero(activeQuestion + 1)}
                        </span>
                        <span className='total-question'>
                            /{addLeadingZero(questions.length)}
                        </span>
                    </div>
                    <h2 className='self-center text-3xl font-semibold pb-10'>
                        {question}
                    </h2>

                    <ul className='flex flex-col items-center text-lg gap-5 '>
                        {choices.map((answer, index) => (
                            <li
                                onClick={() => onAnswerSelected(answer, index)}
                                key={answer}
                                className={`cursor-pointer rounded-xl border-gray-400 border-2 px-10 py-3 w-full ${
                                    selectedAnswerIndex === index
                                        ? "border-red-600 border-[2px]"
                                        : null
                                }`}
                            >
                                {answer}
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center pt-5'>
                        <button
                            onClick={onClickNext}
                            disabled={selectedAnswerIndex === null}
                            className=' rounded bg-btn text-white py-1 px-4'
                        >
                            {activeQuestion === questions.length - 1
                                ? "Завершить"
                                : "Дальше"}
                        </button>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col justify-center w-full items-center gap-5 text-lg'>
                    <h3 className='scale-150'>Ваш результат</h3>
                    <p className=''>
                        <span className='font-semibold text-3xl'>
                            {result.score - 5}
                        </span>{" "}
                        из <span className='font-semibold text-3xl'>50</span>
                    </p>

                    <div className='flex flex-col gap-16 w-full items-center pt-16'>
                        <h1 className='font-semibold text-3xl'>
                            Рекомендуем к прочтению
                        </h1>
                        <div className='flex gap-2 justify-center flex-wrap w-full p-2 flex-grow-0 shrink-0'>
                            <a
                                target='_blank'
                                href='https://telegra.ph/Nebezopasnost-Ispolzovaniya-VPN-Riski-i-Mery-Predostorozhnosti-12-08'
                            >
                                <div className="cursor-pointer flex aspect-square bg-[url('./src/assets/Untitled.png')] bg-cover flex-grow-0 shrink-0 backdrop-blur-lg min-w-52 w-52 rounded-xl">
                                    <span className='text-gray-800 p-2 '>
                                        Небезопасность использования VPN
                                    </span>
                                </div>
                            </a>
                            <div className="cursor-pointer flex aspect-square bg-[url('./src/assets/Untitled.png')] bg-cover flex-grow-0 shrink-0 backdrop-blur-lg min-w-52 w-52 rounded-xl">
                                <span className='text-gray-800 p-2 '>
                                    Лучшие менеджеры паролей
                                </span>
                            </div>
                            <div className="cursor-pointer flex aspect-square bg-[url('./src/assets/fish.png')] bg-cover flex-grow-0 shrink-0 backdrop-brightness-75  backdrop-blur-lg min-w-52 w-52 rounded-xl">
                                <span className='text-gray-800 p-2 '>
                                    Фишинг
                                </span>
                            </div>
                            <div className="cursor-pointer flex aspect-square bg-[url('./src/assets/Untitled.png')] bg-cover flex-grow-0 shrink-0 backdrop-blur-lg min-w-52 w-52 rounded-xl">
                                <span className='text-gray-800 p-2 '>
                                    Что такое менеджер паролей?
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
