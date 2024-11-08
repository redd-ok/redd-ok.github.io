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
                    ? " text-gray-300 hover:text-gray-100 hover:brightness-110 hover:scale-110 transition duration-300 will-change-transform"
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
    svg,
    text,
    link,
}: {
    svg: JSX.Element;
    text: string;
    link?: string;
}) {
    return (
        <a
            className={
                "flex m-1 mr-4" +
                (link
                    ? " text-gray-300 hover:text-gray-100 hover:brightness-110 hover:scale-110 transition duration-300 will-change-transform"
                    : " text-gray-400")
            }
            href={link}
        >
            {svg}
            {/* <Image
                alt=""
                className="aspect-square w-6 h-6 mr-1"
                width={0}
                height={0}
            /> */}
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
                className="flex justify-center text-gray-300 hover:text-gray-100 hover:brightness-110 hover:scale-110 underline underline-offset-4 transition duration-300 will-change-transform"
                href={links[i]}
            >
                {i}
            </a>
        );
    }

    return (
        <div className="w-[12rem] min-h-[12rem] text-center p-1 m-1 bg-[#14141852] bg-zinc-900 border border-zinc-700 rounded">
            <p className="text-gray-300 scale-[1.15] mb-1">
                {name}
            </p>
            <hr className="border-zinc-400" />
            <p className="text-zinc-400">
                {description}
            </p>
            {links ? (
                <hr className="border-zinc-400 mt-1 mb-1" />
            ) : undefined}
            {...linkElements}
        </div>
    );
}

export default function Site() {
    return (
        <div className="text-gray-300 justify-center items-center bg-gradient-to-b from-zinc-900 to-zinc-950 flex h-full min-h-screen select-none">
            <div className="max-w-[48rem] p-3 w-full display text-center bg-gradient-to-b from-[#141418] to-zinc-950 border border-zinc-800 rounded-md">
                <p className="scale-125 mb-1">
                    hello! i am redd
                </p>
                <p className="scale-90 text-[#b3b3b3] brightness-110">
                    lithuanian programmer
                </p>
                <p className="scale-90 text-gray-400">
                    4+ years in lua/luau
                </p>
                <p className="scale-90 text-gray-400 mb-1">
                    2+ years in typescript/javascript
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
                        svg={
                            <div className="aspect-square w-7">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    className="w-6 aspect-square fill-slate-300"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M 12.125 1.9980469 A 1.0001 1.0001 0 0 0 11.199219 2.7441406 L 2.0332031 37.576172 A 1.0001 1.0001 0 0 0 2.7460938 38.798828 L 37.580078 47.966797 A 1.0001 1.0001 0 0 0 38.802734 47.253906 L 47.96875 12.419922 A 1.0001 1.0001 0 0 0 47.255859 11.197266 L 12.421875 2.03125 A 1.0001 1.0001 0 0 0 12.125 1.9980469 z M 21.5 19 L 31 21.5 L 28.5 31 L 19 28.5 L 21.5 19 z"></path>
                                </svg>
                            </div>
                        }
                        text="0_redd"
                        link="https://www.roblox.com/users/1482715772/profile"
                    />
                </div>

                <div className="w-[40rem] max-w-full place-self-center p-1 mb-1 bg-[#14141818] border border-zinc-800 rounded-md">
                    <p className="mb-1 scale-125">
                        Projects
                    </p>
                    <div className="place-self-center p-1 flex flex-wrap justify-center w-full">
                        <Card
                            name="RCS"
                            description="Custom weapon system"
                            links={{
                                ["Test Place"]:
                                    "https://www.roblox.com/games/134212278366499/RCS",
                            }}
                        />
                    </div>
                </div>
                <div className="w-[40rem] max-w-full place-self-center p-1 bg-[#14141818] border border-zinc-800 rounded-md m-1">
                    <p className="mb-1 scale-125">
                        Games
                    </p>
                    <div className="place-self-center p-1 flex flex-wrap justify-center w-full">
                        <Card
                            name="Airsoft Center"
                            description="Previous deleveloper for this game, made 2 gun systems for it from scratch"
                            links={{
                                ["Game Link"]:
                                    "https://www.roblox.com/games/10119617028",
                            }}
                        />
                    </div>
                </div>
                <p className="scale-75 text-gray-500">
                    i know theres not much right now,
                    but im still working on adding more
                    to my portfolio
                </p>
            </div>
        </div>
    );
}
