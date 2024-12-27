import Image from 'next/image';

export default function GatewayGamesLogo() {
    return (
        <Image 
            src='/gateway-games-low.png'
            width={128}
            height={128}
            alt='Gateway Games Logo'
        />
    );
}