import { DHeader } from '../components/desktop/header'
import { HomeCarousel } from '../components/regular/carousel'

export const Home = () => {

    return (
        <>
            <DHeader />
            <div className="page items-center justify-center">
            <HomeCarousel/>
            </div>
        </>

    )
}
