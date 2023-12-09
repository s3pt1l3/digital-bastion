import "regenerator-runtime/runtime";
import { useRef, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import useSound from "use-sound";
import audiodCall from "../assets/call.mp3";
import phone from "../assets/call.jpg";
import phone2 from "../assets/call2.jpg";
import { sendMessage } from "../axios/api";
// import microPhoneIcon from "./microphone.svg";

export function Call() {
    const [playSound, { stop }] = useSound(audiodCall);
    const [showImg, setShowImg] = useState(true);
    const [answered, setAnswered] = useState(false);
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
            <div className='mircophone-container'>
                Browser is not Support Speech Recognition.
            </div>
        );
    }
    const handleListing = () => {
        setIsListening(true);
        // microphoneRef.current.classList.add("listening");
        SpeechRecognition.startListening({
            continuous: true,
            language: "ru-RU",
        });
    };
    const stopHandle = () => {
        setIsListening(false);
        // microphoneRef.current.classList.remove("listening");
        SpeechRecognition.stopListening();
    };
    const handleReset = () => {
        stopHandle();
        resetTranscript();
    };
    return (
        <div className='justify-center h-full flex '>
            <div className='relative'>
                {showImg && (
                    <img
                        className='w-full md:w-64 h-auto'
                        src={answered ? phone2 : phone}
                    />
                )}
                {!showImg && (
                    <div className=''>
                        Вы могли сообщить мошеннику следующую информацию:{" "}
                        <p>{transcript}</p>
                    </div>
                )}
                <button
                    className={`absolute bg-transparent bottom-0 left-0 ${
                        answered ? "w-full" : "w-1/2"
                    } h-1/3`}
                    onClick={() => {
                        if (answered) {
                            stop();
                            setAnswered(false);
                            stopHandle();
                            setShowImg(false);
                            sendMessage(transcript).then(() =>
                                console.log("sent")
                            );
                        }
                    }}
                ></button>
                <button
                    onClick={() => {
                        handleListing();
                        playSound();
                        setAnswered(true);
                    }}
                    className={`absolute bg-transparent bottom-0 right-0 w-1/2 h-1/3 ${
                        answered ? "hidden" : "visible"
                    }`}
                ></button>
            </div>
        </div>
    );
    return (
        <div className='flex flex-col w-full items-center h-full'>
            {/* <div className='bg-[url("./src/assets/call.jpg")] w-9'></div> */}
            <div className='flex h-full bg-[url("./src/assets/call.jpg")] bg-contain'>
                {/* <img src={phone} className='w-52 h-auto absolute -z-30' /> */}
                <button
                    className='w-1/2'
                    onClick={() => {
                        playSound();
                        setAnswered(true);
                    }}
                >
                    Ответить
                </button>
                <button
                    className='w-1/2'
                    onClick={() => (answered ? stop() : null)}
                >
                    {answered ? "Сбросить" : "Не отвечать"}
                </button>
            </div>
            {/* <div>Входящий звонок с неизвестного номера</div> */}
            <div className='flex'></div>
        </div>
    );
    return (
        <div className='microphone-wrapper'>
            <div className='mircophone-container'>
                <div
                    className='microphone-icon-container'
                    ref={microphoneRef}
                    onClick={handleListing}
                >
                    AAA
                    {/* <img src={} className="microphone-icon" /> */}
                </div>
                <div className='microphone-status'>
                    {isListening
                        ? "Listening........."
                        : "Click to start Listening"}
                </div>
                {isListening && (
                    <button
                        className='microphone-stop btn'
                        onClick={stopHandle}
                    >
                        Stop
                    </button>
                )}
            </div>
            {transcript && (
                <div className='microphone-result-container'>
                    <div className='microphone-result-text'>{transcript}</div>
                    <button
                        className='microphone-reset btn'
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
}
