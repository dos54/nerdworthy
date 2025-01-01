import { news } from '@/data/news';

export default function LatestNews() {
    const {
        title,
        image,
        description,
        content
    } = news[news.length-1];

    return (
        <div>
            <h1>{title}</h1>
            <h3
            className='text-center border-b border-slate-200'
            >{description}</h3>
            <div className='my-4'>{content}</div>
        </div>
    );
}