import { useState } from "react";

export const useSendMessage = () => {

    const [message, setMessage] = useState("")

    const changeMessage = (event) => {
        const value = event.target
        setMessage(value);
    }

    const sendMessage = () => {
        return `https://wa.me//55XXXXXXXXXXX?text=${encodeURI(message)}`
    }

    return [message, changeMessage, sendMessage]
}