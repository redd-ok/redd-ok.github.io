import {
    FontawesomeObject,
    IconProp,
} from "@fortawesome/fontawesome-svg-core";
import {
    faDiscord,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Url } from "next/dist/shared/lib/router/router";

function SocialIcon({
    icon,
    text,
    link,
}: {
    icon: IconProp;
    text: string;
    link?: string;
}) {
    return (
        <a className="flex m-1 mr-4 text-gray-400" href={link}>
            <div className="aspect-square w-7">
                <FontAwesomeIcon
                    className={"w-6 aspect-square"}
                    icon={icon}
                />
            </div>
            {text}
        </a>
    );
}

function Card({
    name,
    description,
}: {
    name: string;
    description: string;
}) {
    return (
        <div className="min-w-[12rem] min-h-[10rem] text-center max-w-full p-1 m-1 bg-zinc-900 border border-zinc-700 rounded-sm">
            <p className="text-gray-300">{name}</p>
            <hr className="border-zinc-400"/>
            <p className="text-zinc-400">{description}</p>
        </div>
    );
}

export default function Site() {
    return (
        <div className=" text-gray-300 justify-center items-center">
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 h-screen flex justify-center items-center">
                <div className="w-[48rem] p-3 max-w-full text-center bg-[#141418]  border border-zinc-800 rounded-md">
                    <p className="">
                        hello! i am redd
                    </p>

                    <div className="justify-center flex mb-3">
                        <SocialIcon
                            icon={faDiscord}
                            text="dder0"
                        />
                        <SocialIcon
                            icon={faGithub}
                            text="redd-ok"
                            link="https://github.com/redd-ok"
                        />
                    </div>

                    <div className="w-[40rem] max-w-full place-self-center p-1 bg-zinc-900 border border-zinc-800 rounded-sm">
                        <p className="mb-1">
                            Projects
                        </p>
                        <div className="w-[28rem] max-w-full place-self-center p-1 border-zinc-700 rounded-sm grid-cols-4 flex justify-center">
                                <Card
                                    name="RCS"
                                    description="Custom weapon system"
                                /><Card
                                    name="thinh 1"
                                    description="Phasellus auctor eleifend efficitur. Vivamus vehicula lectus in augue feugiat, eget varius dolor molestie. Vestibulum."
                                /><Card
                                    name="thing 2"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat felis in arcu lacinia, nec."
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
