import GatewayGamesLogo from "@/app/ui/logo-small";
import Menu from '@/app/ui/menu';
import Link from "next/link";

export default function Nav() {

    return (
        <div>
        <div className="grid grid-cols-[auto_1fr_auto] w-full items-center gap-3 rounded-md bg-blue-500 p-4">
            <Link
                href="/"
                className="mr-16"
            >
                <GatewayGamesLogo />
            </Link>
            <h1
            className=" w-full text-left text-3xl md:mx-auto md:text-6xl invisible md:visible"
            >Nerdworthy</h1>
            
            <Menu />
        </div>

        </div>
    );
}