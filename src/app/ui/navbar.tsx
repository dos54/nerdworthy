import GatewayGamesLogo from "@/app/ui/logo-small";
import Menu from '@/app/ui/menu';
import Link from "next/link";

export default function Nav() {

    return (
        <div>
        <div className="flex grow flex-row justify-between items-center gap-3 rounded-md bg-blue-500 p-4">
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