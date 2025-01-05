'use client';

import Image from 'next/image';
import { useState } from 'react';

const defaultImagePath = '/gateway-games-low.png';


export default function EventCard({title, image, description}: {title: string, image?: string, description: string}) {
    const [imgSrc, setImgSrc] = useState(image || defaultImagePath);

    return (
        <div className="event-card flex flex-row my-4 ring">
            <Image
                src={imgSrc}
                alt={title}
                width={128}
                height={128}
                onError={() => setImgSrc(defaultImagePath)}
            />
            <div 
            className='block'>
                <h2 className='antialiased font-semibold text-lg'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}