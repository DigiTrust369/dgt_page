import Image from "next/image";
import backgroundBanner from "../public/assets/images/bg-banner.png";
import bannerImage from "../public/assets/images/banner-image.png";
import aws from "../public/assets/images/logo_brands/amazon.png";
import messari from "../public/assets/images/logo_brands/messari.png";
import blockPi from "../public/assets/images/logo_brands/blockPi.png";
import coinMarketCap from "../public/assets/images/logo_brands/coin-market-cap.png";

export default function Banner() {
    return (
        <div>
            <div className="relative min-h-full overflow-hidden">
                <Image
                    className="absolute min-h-full object-cover"
                    src={backgroundBanner}
                    alt="backgroundBanner"
                ></Image>

                <div className="relative flex justify-between">
                    <div className="z-50 flex-1 space-y-[44px] py-[100px] pl-[120px] text-white xl:max-w-6xl xl:py-[130px]">
                        <div className="space-y-5">
                            <h3 className="text-base font-normal xl:text-[22px]">
                                Welcome to DigiTrust
                            </h3>
                            <h1 className="font-extrabold leading-normal md:max-w-lg md:text-5xl xl:max-w-2xl xl:text-[60px] xl:leading-[80px] 2xl:text-[70px]">
                                Introducing Smart Vault Aggregator
                            </h1>
                            <p className="max-w-sm text-lg font-extralight leading-[35px] -tracking-[0.4px] md:text-sm xl:max-w-lg xl:text-xl">
                                Unlock the power of communities. Make on-chain investment more accessible and efficient for everyone.
                            </p>
                        </div>

                        <div className="space-y-16">
                            <div className="flex items-center gap-x-[22px] text-base font-medium capitalize leading-[20px]">
                                <button className="rounded-[10px] bg-white px-6 py-4 text-sm text-blue-600 xl:text-base">
                                    Start Investing
                                </button>

                                <button className="rounded-[10px] border border-white px-6 py-4 text-sm xl:text-base">
                                    Explore
                                </button>
                            </div>

                            <div className="flex items-center gap-x-[24px] text-[17px] font-normal leading-[30px] -tracking-[0.34px]">
                                <div className="flex items-center gap-x-1.5 text-sm xl:text-base">
                                    <span>
                                        <svg
                                            className="h-auto w-5"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="9"
                                                cy="9"
                                                r="9"
                                                fill="#10B981"
                                            />
                                            <path
                                                d="M5 9L7.8 12L13 6"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    Great Service
                                </div>

                                <div className="flex items-center gap-x-1.5 text-sm xl:text-base">
                                    <span>
                                        <svg
                                            className="h-auto w-5"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="9"
                                                cy="9"
                                                r="9"
                                                fill="#10B981"
                                            />
                                            <path
                                                d="M5 9L7.8 12L13 6"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    Great Service
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                            className="xl:-translate-x-26 absolute bottom-1/2 left-1/2 h-auto max-w-7xl translate-y-1/2 md:w-3/4 xl:w-[60%]"
                            src={bannerImage}
                            alt="bannerImage"
                        ></Image>
                    </div>
                </div>
            </div>
            {/* Logo brands */}
            <section className="container mx-auto flex items-center justify-center gap-x-[50px] px-[275px] py-16 xl:px-0">
                <Image className="" src={aws} alt="amazon"></Image>

                <Image className="" src={messari} alt="messari"></Image>

                <Image className="" src={blockPi} alt="blockPi"></Image>

                <Image
                    className=""
                    src={coinMarketCap}
                    alt="coinMarketCap"
                ></Image>
            </section>
        </div>
    );
}
