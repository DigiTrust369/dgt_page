import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/images/logo.png";
import Button from "./Button";

const navLinks = [
    {
        id: 1,
        title: "Product",
        link: "/product",
    },

    {
        id: 2,
        title: "Community",
        link: "/community",
    },

    {
        id: 3,
        title: "Resources",
        link: "/resources",
    },

    {
        id: 4,
        title: "About Us",
        link: "/about-us",
    },
];

export default function Header() {
    return (
        <header className="font-feature-settings bg-white text-sm font-medium capitalize leading-normal xl:text-base">
            <div className="py-[18px] xl:container lg:px-16 xl:mx-auto xl:px-0">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className="flex flex-1 justify-start">
                        <Link href="/">
                            <Image
                                className="h-auto w-32 xl:w-44"
                                src={Logo}
                                alt="logo"
                            ></Image>
                        </Link>
                    </div>
                    {/* Navigations */}
                    <nav className="hidden lg:block">
                        <ul className="flex gap-x-10">
                            {[
                                ["Product", "/"],
                                ["Community", "/"],
                                ["Resources", "/"],
                                ["About Us", "/"],
                            ].map(([title, url]) => (
                                // eslint-disable-next-line react/jsx-key
                                <li>
                                    <Link
                                        className="hover:text-blue-600"
                                        href={url}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Button */}
                    <div className="flex flex-1 justify-end">
                        <Link href="https://dgt-apt.vercel.app/">
                            <Button>Launch App</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
