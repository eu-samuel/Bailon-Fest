import { useState } from "react";
import { CarouselBG, Carousel1, Carousel2, Carousel3, Carousel4, Carousel5 } from "../../exports";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HomeCarousel = () => {

    const [carouselFlow, setCarouselFlow] = useState(2)

    return (
        <div className="w-[30vw] ml-[61.9vw]">
            <img src={CarouselBG} className="absolute z-10 w-[36.8vw] h-[66vh]
             top-[16.3vh] right-[5vw]" alt="background"/>
            <Carousel
                axis='horizontal'
                infiniteLoop={true}
                useKeyboardArrows={true}
                showThumbs={false}
                autoPlay={true}
                showArrows={false}
                swipeable={true}
                showIndicators={false}
            >
                <div>
                    <img src={Carousel1} alt="Só no Bailon você toma shots de Bailonada!" />
                </div>
                <div>
                    <img src={Carousel2} alt="O Dj Mogima agitou o nosso último Bailon!" />
                </div>
                <div>
                    <img src={Carousel3} alt="O Bailon possui o público mais diversificado da Zona Oeste!" />
                </div>
                <div>
                    <img src={Carousel4} alt="Bateu a fome? A equipe Bailon traz aqui seu lanchinho da madruga!" />
                </div>
                <div>
                    <img src={Carousel5} alt="Acha que acabou? O Bailon só acaba depois que o sol nasce, ainda tem café da manhã!" />
                </div>
            </Carousel>
        </div>
    )
}