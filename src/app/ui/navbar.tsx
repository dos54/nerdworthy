import GatewayGamesLogo from "@/app/ui/logo-small";
import NavLinks from "@/app/ui/nav-links";
import Menu from '@/app/ui/menu';
import Link from "next/link";

export default function Nav() {

    return (
        <div>
        <div className="flex grow w-full flex-row justify-between items-center gap-3 rounded-md bg-blue-600 p-4">
            <Link
                href="/"
                className="mr-16"
            >
                <GatewayGamesLogo />
            </Link>
        </div>
        <div className="">
            <Menu />
        </div>
        </div>
    );
}