export function ContactsPage() {
    return (
        <div className='flex flex-col items-center w-full pt-12'>
            <div className='flex w-2/3'>
                <div className='flex flex-col gap-16 w-full'>
                    <h1 className='text-4xl font-bold'>Наши контакты</h1>
                    <div className='flex  justify-between w-full'>
                        <div className='text-red-700 font-bold text-4xl whitespace-nowrap'>
                            +7 (800) 500 77-37
                        </div>
                        <div className='flex flex-col gap-4 w-full items-end'>
                            <div className='font-bold text-2xl'>
                                adm.digital.bastion@gmail.com
                            </div>
                            <div className='font-bold text-2xl'>
                                Наш{" "}
                                <a
                                    className='text-blue-500'
                                    href='https://t.me/DGbastion'
                                >
                                    канал
                                </a>{" "}
                                в Telegram
                            </div>
                            <div className='font-bold text-2xl'>
                                Наш{" "}
                                <a
                                    href='https://t.me/Digital_BastionBot'
                                    className='text-blue-500'
                                >
                                    бот
                                </a>{" "}
                                в Telegram
                            </div>
                            <div className='font-bold text-2xl'>
                                По всем вопросам обращайтесь{" "}
                                <a
                                    href='https://t.me/echo100'
                                    className='text-blue-500'
                                >
                                    сюда
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
