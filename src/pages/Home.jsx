import { HomeAD, HomeAD2, Divas } from '../exports'
import { DHeader } from '../components/desktop/header'
import { HomeCarousel } from '../components/regular/carousel'
import { DSocialButtons } from '../components/desktop/socialbuttons'

export const Home = () => {

    return (
        <>
            <DHeader />
            <div className="page bg-home items-center justify-between">
                <div className="flex absolute items-center flex-col ml-[13.5vw] mb-[9vw]">
                    <img src={HomeAD} className=" w-[34vw]" />
                    <article className="w-[35vw] text-justify">
                        A Festa BAILON vem com a proposta de interagir com o público antes, durante e depois da
                        festa. Nosso diferencial está no fato de que o frequentador que decide como será o evento,
                        votando em nossas enquetes a fim de escolher desde a nossa setlist, bebidas e até as atrações.
                        Vá até nossa página de enquetes para montar o Bailon do jeito que você quiser, prometemos que você vai arrasar!
                    </article>
                    <DSocialButtons />
                </div>
                <div className=" absolute top-[18vh] left-[59vw]">
                        <img src={HomeAD2} className="w-[35vw]" alt="Saiba quando teremos o próximo Bailon!" />
                    </div>
                <img src={Divas} className="absolute top-[60vh] left-[2vw] w-[13vw]"/>
                <HomeCarousel />
            </div>
        </>

    )
}
