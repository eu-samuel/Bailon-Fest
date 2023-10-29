import { Logo, Io, Divas } from "../../exports"

export const DHeader = () => {

    return (
        <header className="desktop-header">

            <img src={Logo} className="w-[8vw] ml-[3vw]" alt="Logo da festa 'Bailon'" />

            <ul className=" flex gap-[3vw] relative right-[25vw]">
                <li className="desktop-li">HOME</li>
                <li className="desktop-li">SOBRE</li>
                <li className="desktop-li">ENQUETES </li>
                <li className="desktop-li">INGRESSOS
                    <Io.IoIosArrowDown /></li>
                <li className="desktop-li">GALERIA</li>
                <li className="desktop-li">FAQ</li>
                <li className="desktop-li">LOGIN</li>
            </ul>
        </header>
    )

}