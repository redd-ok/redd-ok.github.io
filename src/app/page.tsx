function ProjectThingy({
    children,
    projectName,
    href,
    projectDescription,
}: React.PropsWithChildren<{
    projectName?: string;
    href?: string;
    projectDescription?: string;
}>) {
    return (
        <div className="w-1/6 bg-black text-white rounded-md opacity-45 mb-2 mr-4">
            <p className="text-center">
                <a href={href} className={href && "underline underline-offset-4" || ""}>
                    {projectName}
                </a>

                <div className="mb-1" />

                <hr className="mb-2" />

                {projectDescription}

                <div className="mb-2" />
            </p>
        </div>
    );
}

export default function Site() {
    return (
        <div className="bg-blue-50">
            <div className="bg-gradient-to-b from-slate-500 to-blue-50 mb-24 h-screen">
                <div className="text-white relative inset-y-1/4 text-center">
                    <h1 className="text-4xl mb-7">my portfolio thingy</h1>

                    <p className="text-2xl mb-8">i am redd</p>

                    <p className="text-l">i liek coding and stuff</p>
                    <p className="text-l mb-3">
                        i usually code in lua, typescript, and sometimes a bit of python. i am more advanced
                        with lua than javascript and python
                    </p>

                    <p className="text-l mb-2">
                        i have experience in frontend coding and backend coding for roblox
                    </p>
                    <p className="text-l mb-2">
                        experience with roblox development tools such as rojo, wally
                        and aftman
                    </p>
                    <p className="text-l">
                        slight experience with roblox libraries like roact and red (a networking library)
                    </p>
                    <p className="text-l">
                        i am more experienced with libraries such as fastcast redux,
                        bridgenet 2, cmdr, and more
                    </p>
                    <p className="text-l mb-2">
                        i have some knowledge about advanced topics such as the lua vm, obfuscation, and a product whitelist system for roblox
                    </p>
                </div>

                <div className="text-center relative inset-y-1/2">
                    <p className="top-[70%] relative">
                        list of projects i have worked on
                    </p>
                </div>
            </div>

            <div className="ml-12 flex flex-row">
                <ProjectThingy
                    projectName="Airosft Center 2"
                    href="https://www.roblox.com/games/10119617028"
                    projectDescription="i joined the development team while airsoft center 2 was in development, i made the gun engine and coded the gamemodes. i worked on both the backend and the frontend"
                />

                <ProjectThingy
                    projectName="ACS Edit"
                    href="https://www.roblox.com/games/14323997355"
                    projectDescription="a highly advanced acs edit i made for fun, it features a custom bullet system, a custom health system, and more. it contains more than just a advanced acs edit and i am still working on it sometimes to add more features"
                />

                <ProjectThingy
                    projectName="Custom Lua VM"
                    projectDescription="a custom lua vm i made a really while back, it featured custom bytecode and bytecode interpretation, i stopped working on it because of a bug with functions that i couldnt fix. its currently archived on my computer"
                />

                <ProjectThingy
                    projectName="Python Obfuscator"
                    projectDescription="a obfuscator for python i made to expand my knowledge about python and python libraries. its currently not yet finished, i dont know if i will finish it yet, as i havent worked on it in a while"
                />
            </div>
        </div>
    );
}
