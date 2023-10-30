import { Logo, Io, Divas, Wpp } from "../../exports"
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useSendMessage } from "../../scripts/hooks/useSendMessage";

export const DHeader = () => {

    const [message, changeMessage, sendMessage] = useSendMessage("")

    return (
        <header className="desktop-header">

            <img src={Logo} className="w-[8vw] ml-[3vw]" alt="Logo da festa 'Bailon'" />

            <ul className=" flex gap-[3vw] relative right-[5vw]">
                <li className="desktop-li">HOME</li>
                <li className="desktop-li">SOBRE</li>
                <li className="desktop-li">ENQUETES </li>
                <li className="desktop-li">INGRESSOS
                    <Io.IoIosArrowDown /></li>
                <li className="desktop-li">GALERIA</li>
                <li className="desktop-li">FAQ</li>
                <li className="desktop-li">LOGIN</li>
            </ul>
            <FloatingWhatsApp 
                accountName={'Festa Bailon'}
                phoneNumber="21992206966"
                avatar={Wpp}
                statusMessage={'Já já te respondemos!'}
                chatMessage={'Olá, tudo bem? Em que podemos te ajudar?'}
                placeholder={"Escreva sua mensagem..."}
                messageDelay={1}
                notification={true}
                allowEsc={true}
                value={message}
                onChange={changeMessage}
                allowClickAway={true}
                onSubmit={sendMessage}
                className="absolute text-black"/>
        </header>
    )

}