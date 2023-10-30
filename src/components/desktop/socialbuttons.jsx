import { XIcon, FbIcon, IgIcon } from '../../exports'

export const DSocialButtons = () => {

    return (
        <div className="flex gap-[2vh]">

            <div className="flex items-center gap-[1vw] relative top-[3vh] left-[9vw]">
                <span className="font-semibold text-[18px]">Nossas redes sociais: </span>
                <button>
                    <a href="https://www.instagram.com/festabailon" target="_blank">
                        <img src={IgIcon} alt="Siga o Bailon no Instagram"
                            className="w-[1.5vw]" />
                    </a>
                </button>
                <button>
                    <a href="https://www.facebook.com/festabailon" target="_blank">
                        <img src={FbIcon} alt="Siga o Bailon no Facebook"
                            className="w-[1.5vw]" />
                    </a>
                </button>
                <button>
                    <a href="https://www.twitter.com/festabailon" target="_blank">
                        <img src={XIcon} alt="Siga o Bailon no X/Twitter"
                            className="w-[1.5vw]" />
                    </a>
                </button>
            </div>

        </div>
    )
}