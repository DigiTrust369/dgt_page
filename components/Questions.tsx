export default function Questions() {
    return (
        <section className="bg-blue-50">
            <div className="space-y-[120px] pb-40 pt-[85px] xl:container lg:px-16 xl:mx-auto xl:px-0">
                {/* Title */}
                <h1 className="text-center text-4xl font-bold leading-[130%] text-gray-800 xl:text-heading">
                    Frequently Ask Questions
                </h1>

                {/* Content */}
                <div className="grid grid-cols-2 gap-[30px]">
                    <button className="group">
                        <div className="h-[230px] rounded-primary border border-gray-45 bg-white p-7 text-left shadow-primary duration-100 group-hover:bg-blue-600">
                            <div className="flex items-center gap-x-[20px] pb-4 xl:gap-x-[30px]">
                                <div>
                                    <svg
                                        className="h-auto w-5 text-blue-600 group-hover:text-white xl:w-[30px]"
                                        viewBox="0 0 30 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            opacity="0.8"
                                            width="30"
                                            height="5"
                                            rx="2.5"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-left text-base font-semibold group-hover:text-white xl:text-lg">
                                    What make DigiTrust different from others ?
                                </h2>
                            </div>
                            <div className=" max-w-md pl-[40px] text-sm font-normal text-gray-600 group-hover:text-white xl:pl-[60px]">
                                <p>
                                DigiTrust innovates by blending decentralized asset management with social networking. Users collaboratively
                                manage assets on a transparent blockchain, with incentives for participation. Decentralized governance and privacy-focused 
                                design create a seamless, user-controlled ecosystem.
                                </p>
                            </div>
                        </div>
                    </button>

                    <button className="group">
                        <div className="h-[230px] rounded-primary border border-gray-45 bg-white p-7 text-left shadow-primary duration-100 group-hover:bg-blue-600">
                            <div className="flex items-center gap-x-[20px] pb-4 xl:gap-x-[30px]">
                                <div>
                                    <svg
                                        className="h-auto w-5 text-blue-600 group-hover:text-white xl:w-[30px]"
                                        viewBox="0 0 30 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            opacity="0.8"
                                            width="30"
                                            height="5"
                                            rx="2.5"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-left text-base font-semibold group-hover:text-white xl:text-lg">
                                    What is benefit of using DigiTrust ?
                                </h2>
                            </div>
                            <div className=" max-w-md pl-[40px] text-sm font-normal text-gray-600 group-hover:text-white xl:pl-[60px]">
                                <p>
                                DigiTrust offers a unified space where users seamlessly manage assets, engage socially, and earn incentives. 
                                With decentralized governance and privacy, it provides a transparent, user-controlled, and rewarding digital ecosystem.
                                </p>
                            </div>
                        </div>
                    </button>                    

                    <div className="space-y-[30px]">                        
                        <button className="group w-full">
                            <div className="flex h-[100px] items-center rounded-primary border border-gray-45 bg-white p-7 shadow-primary duration-100 group-hover:bg-blue-600">
                                <div className="flex items-center gap-x-[30px]">
                                    <div>
                                        <svg
                                            className="h-auto w-5 group-hover:text-white xl:w-[30px]"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                opacity="0.8"
                                                y="12.5"
                                                width="30"
                                                height="5"
                                                rx="2.5"
                                                fill="currentColor"
                                            />
                                            <rect
                                                opacity="0.8"
                                                x="17.5"
                                                width="30"
                                                height="5"
                                                rx="2.5"
                                                transform="rotate(90 17.5 0)"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-base font-semibold text-gray-800 group-hover:text-white xl:text-lg">
                                        Contact
                                    </h2>
                                </div>
                            </div>
                        </button>
                    </div>                   

                    {/* <button className="group w-full">
                        <div className="flex h-[100px] items-center rounded-primary border border-gray-45 bg-white p-7 shadow-primary duration-100 group-hover:bg-blue-600">
                            <div className="flex items-center gap-x-[30px]">
                                <div>
                                    <svg
                                        className="h-auto w-5 group-hover:text-white xl:w-[30px]"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            opacity="0.8"
                                            y="12.5"
                                            width="30"
                                            height="5"
                                            rx="2.5"
                                            fill="currentColor"
                                        />
                                        <rect
                                            opacity="0.8"
                                            x="17.5"
                                            width="30"
                                            height="5"
                                            rx="2.5"
                                            transform="rotate(90 17.5 0)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-base font-semibold text-gray-800 group-hover:text-white xl:text-lg">
                                    What is benefit of using DigiTrust ?
                                </h2>
                            </div>
                        </div>
                    </button> */}
                </div>
            </div>
        </section>
    );
}
