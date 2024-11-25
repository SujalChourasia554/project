import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function ServicesCard(props: { img: string | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) {
    return (
        <>
            <div className="ServicesCard overflow-hidden bg-white sm:h-[27.875rem] lg:h-[25.5rem] :h-[25rem] w-full h-[23.4rem] pt-[2.5rem] pb-[2.188rem] pr-[1.875rem] pl-[1.875rem] shadow-box-shadow-4 ">
                <div className="w-full h-full">

                    <div className="w-full h-[8.75rem] mb-[1.25rem] flex justify-center"><img className="w-[11.563rem]" src={props.img}></img></div>

                    <div className="w-full ">

                        <h3 className="mb-[0.938rem] flex justify-center"><a href="" className="text-lg lg:text-2xl font-bold lg:font-extrabold">{props.title}</a></h3>
                        <p className="text-[14px] lg:text-[] text-center font-extralight text-gray-900">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

                        <div className="flex justify-center mt-[1.563rem]">

                            <a href="" className="text-sm h-[1.563rem] flex items-center text-gray-400 group-hover:text-color-orange">Find A Home</a>

                            <div className="w-[1.125rem] flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size - [0.875rem] fill-current group-hover:text-color-orange text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

