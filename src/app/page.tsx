import { FontawesomeObject, IconProp } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Url } from "next/dist/shared/lib/router/router";

function Card({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-2xl border p-4 w-64 m-3 items-center text-center min-h-52">
            {children}
        </div>
    );
}

function LargeCard({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-2xl border p-4 w-96 max-w-full m-3 items-center text-center min-h-52">
            {children}
        </div>
    );
}

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
        <a className="flex m-1 mr-4" href={link}>
            <div className="aspect-square w-7">
                <FontAwesomeIcon className={"w-6 aspect-square"} icon={icon}/>
            </div>
            {text}
        </a>
    );
}

export default function Site() {
    return (
        <div className=" text-gray-300 justify-center items-center">
            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 h-screen flex justify-center items-center">
                <div className="w-[32rem] max-w-full text-center shadow-2xl bg-zinc-900  border border-zinc-700">
                    <div className=" mt-3" />
                    <p className="mb-3">hello! i am redd</p>
                    <p className="mb-3">i am a programmer</p>
                    <p className="mb-3">
                        i usually develop in roblox, but sometimes make things
                        outside of it too
                    </p>
                    <p className="mb-4">
                        i code mostly in lua and typescript, but sometimes
                        python too
                    </p>
                    <p className="mb-4">
                        mostly interested in tactical shooters
                    </p>
                    <div className="justify-center flex">
                        <SocialIcon icon={faDiscord} text="dder0" />
                        <SocialIcon icon={faGithub} text="redd-ok" link="https://github.com/redd-ok"/>
                    </div>
                </div>
            </div>

            <p className="relative bottom-12 text-center mb-2">
                Experienced with
            </p>
            <hr className="relative bottom-12" />

            <div className="h-full grid md:flex justify-center items-center mb-12">
                <Card>
                    <p className="mb-2">Roblox development tools</p>
                    <hr className="mb-2" />
                    im decently experienced at rojo and wally, having worked on
                    a fully rojo managed project and partially aswell
                </Card>
                <Card>
                    <p className="mb-2">Lua</p>
                    <hr className="mb-2" />
                    ive been coding lua for 4+ years now, most of my coding
                    experience comes from lua and in the past use to work on a
                    custom compiler and interpreter for lua 5.1, i mostly code
                    lua for roblox however
                </Card>
                <Card>
                    <p className="mb-2">Typescript & Javascript</p>
                    <hr className="mb-2" />i have some experience with
                    typescript and javascript, ive made websites and discord
                    bots before using typescript, i am still more experienced in
                    lua however, i have been recently working with roblox-ts alongside flamework, and react-lua inside personal projects
                </Card>
                <Card>
                    <p className="mb-2">Roblox</p>
                    <hr className="mb-2" />
                    roblox is what mainly inspired me to learn programming and
                    game development as it was alot more simple back then, i
                    have experience coding in front-end and back-end for roblox
                    games, and have a decent knowledge about game security
                </Card>
                <Card>
                    <p className="mb-2">Gun Engines for Roblox</p>
                    <hr className="mb-2" />i have alot of experience in creating
                    gun engines, having been commisioned once before for a 20+
                    million visits game, i mostly like creating more tactical
                    gun engines but sometimes ill have todo arcady gun engines
                </Card>
                <Card>
                    <p className="mb-2">Anti-Cheats</p>
                    <hr className="mb-2" />i am some-what decent at developing and bypassing anti-cheats, i used to exploit on roblox which let me gain alot of knowledge about security in roblox games and general security across all games, i do not exploit on roblox games anymore and i do not plan todo so without explicit permission
                </Card>
            </div>

            <p className="relative text-center mb-2">Projects</p>
            <hr className="relative mb-20" />

            <div className="h-full grid md:flex justify-center items-center mb-12">
                <LargeCard>
                    <p className="mb-2">Airsoft Center 2</p>
                    <hr className="mb-2" />i am a developer for airsoft center,
                    a game which has 20+ million visits, i joined the
                    development team shortly after i was commisioned to make a
                    gun engine for them, i was tasked with back-end coding
                    aswell as front-end, i scripted the gamemodes for the game
                    aswell as the entire gun engine
                </LargeCard>
            </div>
        </div>
    );
}
