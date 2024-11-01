import {
    FontawesomeObject,
    IconProp,
} from "@fortawesome/fontawesome-svg-core";
import {
    faDiscord,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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
        <a
            className={
                "flex m-1 mr-4" +
                (link
                    ? " text-gray-300 hover:text-gray-100 hover:brightness-110 hover:scale-110 transition duration-300"
                    : " text-gray-400")
            }
            href={link}
        >
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

function CustomIcon({
    iconURL,
    text,
    link,
}: {
    iconURL: string;
    text: string;
    link?: string;
}) {
    return (
        <a
            className={
                "flex m-1 mr-4" +
                (link
                    ? " text-gray-300 hover:text-gray-100 hover:brightness-110 hover:scale-110 transition duration-300"
                    : " text-gray-400")
            }
            href={link}
        >
            <Image
                src={iconURL}
                alt=""
                className="aspect-square w-6 h-6 mr-1"
                width={0}
                height={0}
            />
            {text}
        </a>
    );
}

function Card({
    name,
    description,
    links,
}: {
    name: string;
    description: string;
    links?: { [text: string]: string };
}) {
    const linkElements = [];
    for (const i in links) {
        linkElements.push(
            <a
                className="text-gray-300 hover:text-gray-100 hover:scale-150 scale-100 underline underline-offset-4 transition duration-300"
                href={links[i]}
            >
                {i}
            </a>
        );
    }

    return (
        <div className="w-[12rem] max-w-fit min-h-[12rem] text-center p-1 m-1 bg-[#14141852] bg-zinc-900 border border-zinc-700 rounded">
            <p className="text-gray-300 scale-[1.15] mb-1">
                {name}
            </p>
            <hr className="border-zinc-400" />
            <p className="text-zinc-400">
                {description}
            </p>
            {links ? (
                <hr className="border-zinc-400 mt-3 mb-3" />
            ) : undefined}
            {...linkElements}
        </div>
    );
}

export default function Site() {
    return (
        <div className=" text-gray-300 justify-center items-center select-none">
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 h-screen flex justify-center items-center">
                <div className="w-[48rem] p-3 max-w-full text-center bg-gradient-to-b from-[#141418] to-zinc-950 border border-zinc-800 rounded-md">
                    <p className="scale-125">
                        hello! i am redd
                    </p>
                    <p className="scale-90 text-gray-400">
                        4+ years in lua/luau
                    </p>
                    <p className="scale-90 text-gray-400">
                        2+ years in
                        typescript/javascript
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
                        <CustomIcon
                            iconURL="https://images.rbxcdn.com/7bba321f4d8328683d6e59487ce514eb"
                            text="0_redd"
                            link="https://www.roblox.com/users/1482715772/profile"
                        />
                    </div>

                    <div className="w-[40rem] max-w-full place-self-center p-1 bg-[#14141818] border border-zinc-800 rounded-md">
                        <p className="mb-1 scale-125">
                            Projects
                        </p>
                        <div className="place-self-center p-1 flex justify-center w-full">
                            <Card
                                name="RCS"
                                description="Custom weapon system"
                                links={{
                                    ["Test Place"]:
                                        "https://www.roblox.com/games/134212278366499/RCS",
                                }}
                            />
                            <Card
                                name="thinh 1"
                                description="Phasellus auctor eleifend efficitur. Vivamus vehicula lectus in augue feugiat, eget varius dolor molestie. Vestibulum."
                            />
                            <Card
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
