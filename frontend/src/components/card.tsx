export interface CardProps {
    title: string;
    tag: string;
    link: string;
    author: string;
    date: string;
    image: string;
}
export function Card({ author, date, link, tag, title, image }: CardProps) {
    return (
        <a href={link} target='_blank' className='group'>
            <div
                className='flex flex-col gap-2 h-[377px] md:max-w-sm border-gray-400 border-[1px] bg-white rounded-lg bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
                    bg-no-repeat
                    transition-[background-size]
                    duration-500
                    hover:bg-[length:100%_5px]
                    group-hover:bg-[length:100%_4px]
                    dark:from-blue-300 dark:to-blue-400'
            >
                <div className='object-contain pb-2'>
                    <img
                        className='rounded-t-lg
                    transition-all
                    duration-500'
                        src={image}
                    />
                </div>

                <span className='font-semibold text-sm uppercase text-indigo-600 px-2'>
                    {tag}
                </span>
                <span
                    className='
                    px-2
                    font-bold text-lg
                    '
                >
                    {/* bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
                    bg-no-repeat
                    transition-[background-size]
                    duration-500
                    hover:bg-[length:100%_5px]
                    group-hover:bg-[length:100%_4px]
                    dark:from-blue-300 dark:to-blue-400 */}
                    {title}
                </span>
                <div className='px-2 pb-2 flex gap-2 items-center '>
                    <span className='text-ellipsis'>{author}</span>
                    <span className='text-gray-300 dark:text-gray-600'>•</span>
                    <span>{date}</span>
                </div>
            </div>
        </a>
    );
}
