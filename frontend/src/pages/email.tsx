import Mail from "../assets/mail.jpg";

export function Email() {
    return (
        <div className='flex w-full h-full'>
            <a target='_blank' href=''>
                <img src={Mail} />
            </a>
        </div>
    );
}
